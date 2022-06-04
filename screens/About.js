import { StatusBar } from "expo-status-bar";
import { Button, TextInput, View, Text } from "react-native";
import { useState } from "react";

import styles from "./styles";

function About() {
    const [texto, setTexto] = useState("Sobre a página")
    return (
        <View style={styles.container}>
            <Text>{texto}</Text>
            {/* <TextInput onChangeText={(e) => setTexto(e.target.value)} /> */}
            <TextInput value={texto} onChangeText={setTexto} />
            <Button title="Enviar" onPress={() => console.log("Teste")} />
            <StatusBar style="auto" />
        </View>
    );
}

export default About;