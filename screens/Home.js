import { Button, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button title="Produtos" onPress={() => {navigation.navigate('ProdutosScreen')}} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;