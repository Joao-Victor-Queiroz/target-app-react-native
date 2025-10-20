import { View } from "react-native";

import { styles } from "./styles";
import { colors } from "@/theme";

import { Option } from "./option";

import { TransactionTypes } from "@/utils/TransactionTypes";

type Props = {
  selected: TransactionTypes;
  onChange: (type: TransactionTypes) => void;
};

export function TransactionType({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Option
        icon="arrow-upward"
        title="Guardar"
        isSelected={selected === TransactionTypes.Input}
        onPress={() => onChange(TransactionTypes.Input)}
        selectedColor={colors.blue[500]}
      />
      <Option
        icon="arrow-downward"
        title="Guardar"
        isSelected={selected === TransactionTypes.Output}
         onPress={() => onChange(TransactionTypes.Output)}
        selectedColor={colors.red[400]}
      />
    </View>
  );
}
