import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

function Cart({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Carrinho de compras</Text>
            <Button title="Sobre" onPress={() => {navigation.navigate('AboutScreen')}} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Cart;