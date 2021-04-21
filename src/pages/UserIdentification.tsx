import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';




export function UserIdentification() {

     const navigation = useNavigation();//para fazer a navegação

     function handleSubmit() {
          navigation.navigate('Confirmation')
     }


     const [isFocus, setIsFocus] = useState(false)
     const [inputChange, setInputChange] = useState(false)
     const [name, setname] = useState<string>()
     const [error, setError] = useState(false)

     function handleInputBlur() {
          inputChange ? setIsFocus(true) : setIsFocus(false)
     }
     function handleInputFocus() {
          setIsFocus(true)
     }

     function handleInputChange(value: string) {
          setInputChange(!!value) //transform value em boleano, se tiver true se nao false
          setname(value)
          setError(false)
     }

     function handleError() {
          setError(true)
     }

     return (
          <SafeAreaView style={style.container}>
               <KeyboardAvoidingView
                    style={style.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
               >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                         <View style={style.content}>
                              <View style={style.form}>

                                   <Text style={style.emoji}>
                                        {inputChange ? '😁' : '😃'}
                                   </Text>

                                   <Text style={style.title}>Como podemos {'\n'} chamar você?</Text>

                                   <TextInput
                                        style={[
                                             style.input,
                                             error && { borderColor: colors.red },
                                             (isFocus || inputChange) && { borderColor: colors.green },
                                        ]}
                                        placeholder="Digite um nome"
                                        //Usuario sai do input
                                        onBlur={handleInputBlur}
                                        //Usuario vai pro input
                                        onFocus={handleInputFocus}

                                        onChangeText={handleInputChange}
                                   />

                                   <Button
                                        title='Confirmar'
                                        onPress={!!name ? handleSubmit : handleError}
                                   />
                              </View>

                         </View>
                    </TouchableWithoutFeedback>
               </KeyboardAvoidingView>
          </SafeAreaView>
     )
}

const style = StyleSheet.create({
     container: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around'

     },
     content: {
          flex: 1,
          width: '100%',
     },
     form: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 54,

     },
     emoji: {
          fontSize: 32,
          marginBottom: 20,
     },
     title: {
          fontFamily: fonts.heading,
          color: colors.heading,
          fontSize: 28,
          lineHeight: 32,
     },
     input: {
          borderBottomWidth: 1,
          borderColor: colors.gray,
          color: colors.heading,
          width: '100%',
          fontSize: 18,
          marginTop: 50,
          padding: 10,
          textAlign: 'center',
          marginBottom: 40,
     },


});