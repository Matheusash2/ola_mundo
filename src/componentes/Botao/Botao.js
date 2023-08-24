import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Botao = ({ texto, clicado, habilitado, numero }) => {
  const onPressAtivo = () => {
    if (habilitado) {
      clicado();
    }
  };
  const corDeNumero = () => {
    if (!habilitado && numero) {
      return styles.numero;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPressAtivo}
      disabled={!habilitado}
      style={[
        styles.botao,
        habilitado ? null : styles.desabilitado,
        corDeNumero(),
      ]}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default Botao;
