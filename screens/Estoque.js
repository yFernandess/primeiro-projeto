import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

function Estoque({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Estoque dos produtos</Text>
            <Button title="Carrinho" onPress={() => {navigation.navigate('CartScreen')}} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Estoque;