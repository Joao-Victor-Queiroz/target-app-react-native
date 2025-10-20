import { View, StatusBar, Alert } from "react-native";
import { HomeHeader, HomeHeaderProps } from "@/components/HomeHeader";
import { Target, TargetProps } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { router, useFocusEffect } from "expo-router"; //toda vez que abre a tela, recarrega o componente
import { useCallback, useState } from "react"; //garantir que o useFocusEffect seja executado de forma perfomática

import { numberToCurrency } from "@/utils/numberToCurrency";

import { useTargetDatabase } from "@/database/useTargetDatabase";
import Loading from "@/components/Loading";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";



export default function Index() {
  const targetDatabase = useTargetDatabase();
  const transactionsDatabase = useTransactionsDatabase()

  const [summary, setSummary] = useState<HomeHeaderProps>()
  const [isFetching, setIsFetching] = useState(true);
  const [targets, setTargets] = useState<TargetProps[]>([]);

  async function fetchTargets(): Promise<TargetProps[]> {
    try {
      const response = await targetDatabase.listByClosestTarget();
      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        current: numberToCurrency(item.current),
        percentage: item.percentage.toFixed(0) + "%",
        target: numberToCurrency(item.amount),
      }));
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as metas.");
      console.log(error);
    }
  }

  async function fetchSummary(): Promise<HomeHeaderProps>{
    try {
      const response = await transactionsDatabase.summary();

      return{
        total: numberToCurrency(response.input + response.output),
        input: {
          label: "Entradas",
          value: numberToCurrency(response.input)
        },
        output: {
          label: "Saídas",
          value: numberToCurrency(response.output)
        }
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar o resumo");
      console.log(error)
    }
  }

  async function fetchData() {
    const targetDataPromise = fetchTargets();
    const summaryDataPromise = fetchSummary()

    const [targetData, summaryData] = await Promise.all([targetDataPromise, summaryDataPromise]);

    setTargets(targetData);
    setSummary(summaryData)
    setIsFetching(false)
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />{" "}
      {/*Muda a cor das informações como hora, bateria, muito massa*/}
      <HomeHeader data={summary} />
      <List
        title="Metas"
        data={targets}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.id!}
        emptyMessage="Nenhuma meta. Toque em nova meta pra criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />
      <View style={{ padding: 24, paddingBottom: 64 }}>
        <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
