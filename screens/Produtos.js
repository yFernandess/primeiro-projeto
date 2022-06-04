import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

function Produtos({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Cadastro de produtos</Text>
            <Button title="Estoque" onPress={() => {navigation.navigate('EstoqueScreen')}} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Produtos;