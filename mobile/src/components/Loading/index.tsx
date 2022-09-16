import { ActivityIndicator, SafeAreaView } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </SafeAreaView>
  );
}
