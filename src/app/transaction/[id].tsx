import { View, Text, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { TransactionType } from "@/components/TransactionType";
import { TransactionTypes } from "@/utils/TransactionTypes";

import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";

export default function Transaction() {
  const [type, setType] = useState(TransactionTypes.Input);
  const [amount, setAmount] = useState(0);
  const [observation, setObservation] = useState("");
  const params = useLocalSearchParams<{ id: string }>();
  const [isCreating, setIsCreating] = useState(false);

  const transactionDatabase = useTransactionsDatabase()

  async function handleCreate() {
    try {
      if (amount <= 0) {
        return Alert.alert("Atenção!", "Preecha o valor. A transação deve ser maior que 0.");
      }
      setIsCreating(true)

      await transactionDatabase.create({
        target_id: Number(params.id),
        amount: type === TransactionTypes.Output ? amount * -1 : amount,
        observation
      })

      Alert.alert("Sucesso", "Transação salva com sucesso!",[
        {text: "Ok",
          onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a transação.");
      console.log(error);
    }finally{
      setIsCreating(false)
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova transação"
        subtitle="A cada valor guardado você fica maais próximo da sua meta. Se esforce para guardar e evitar retirar"
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />
        <CurrencyInput label="Valor (R$)" value={amount} onChangeValue={setAmount} />
        <Input
          label="Motivo (opcional)"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
          onChangeText={setObservation}
        />
        <Button title="Salvar" onPress={handleCreate} isProcessing={isCreating} />
      </View>
    </View>
  );
}
