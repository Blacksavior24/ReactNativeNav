import React from "react";
import {TextInput,Text, Button, View} from 'react-native'

export default function LoginForm(){
    return  (
        <View>
            <TextInput placeholder="email"/>
            <TextInput placeholder="pASS" />
            <Button title="Enviar" onPress={()=> console.log('enviado')}>Enviar</Button>
        </View>
    )
}