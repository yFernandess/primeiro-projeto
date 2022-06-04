import { Button, TextInput, View, Text } from "react-native";
import { useState } from "react";

function Cep() {
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')

    const handleConsultar = () => {
        const url = "https://viacep.com.br/ws/" + cep + "/json/"
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            response.json().then(function(data){
                setCidade(data['logradouro'])
            })
        })
    }

    return (
        <View>
            <Text>Digite um cep (somente números):</Text>
            <TextInput value={cep} onChangeText={setCep} />
            <Button title="Consultar" onPress={handleConsultar} />
            <Text>{cidade}</Text>
        </View>
    );
}

export default Cep;