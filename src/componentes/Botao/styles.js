import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#00FF00",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    width: 120,
    height: 50,
    borderRadius: 40,
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
  },
  desabilitado: {
    backgroundColor: "#a9a9a9",
  },
  numero: {
    backgroundColor: "#7B68EE",
  },
});

export default styles;
