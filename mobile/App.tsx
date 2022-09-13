import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  style: Object;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={props.style}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heloo ReactNative!</Text>
      <Button title="Meu primeiro botão!" style={styles.title} />
      <StatusBar style="auto" backgroundColor="#fff8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 22,
  },
});
