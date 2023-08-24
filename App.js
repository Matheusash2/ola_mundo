import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Botao from "./src/componentes/Botao/Botao";
import { useState } from "react";

export default function App() {
  const [textoBotao, setTextoBotao] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Botao
          texto={"Aumentar"}
          clicado={() => setTextoBotao(textoBotao + 1)}
          habilitado={true}
        />
        <Botao texto={textoBotao} habilitado={false} numero={textoBotao > 0}/>
        {textoBotao > 0 ? (
          <Botao
            texto={"Diminuir"}
            clicado={() => setTextoBotao(textoBotao - 1)}
            habilitado={true}
          />
        ) : (
          <Botao texto={"Mínimo"} />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0E0E6",
    width: 150,
    height: 200,
    borderRadius: 20,
  },
});
