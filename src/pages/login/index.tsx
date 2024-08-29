import React, { useState } from "react";

import {Text,
        View,
        Image,
        TextInput,
        Touchable,
        TouchableOpacity,
        Alert,
} from 'react-native';


import { style } from "./styles";
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login(){
    const [email,setEmail] = useState('');
    const [passoword,setPassword] = useState('');

    function getLogin(){
        try{

            if(!email || !passoword){
                return Alert.alert("Atenção","Informe os campos obrigatórios!")
            }

            Alert.alert('Logado com sucesso!')
        }catch(error){
            console.log(error)
        }
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
              <Text style={style.text}>Data Guardians</Text>
            </View>

            <View style={style.boxMid}>
            <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
            <View style={style.boxInput}>
                <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        nome='email'
                        size={20}
                        color={themas.colors.gray}
                        />
            </View>
            <Text style={style.titleInput}>SENHA</Text>
            <View style={style.boxInput}>
                <TextInput
                        style={style.input}
                        value={passoword}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        nome='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                        />
            </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    <Text style={style.textButton}>entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? Crie agora</Text>
        </View>
    )
}