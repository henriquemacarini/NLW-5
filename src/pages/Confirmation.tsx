import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Button } from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
     return (
          <SafeAreaView style={style.container}>
               <View style={style.content}>

                    <Text style={style.emoji}> 😁 </Text>

                    <Text style={style.title}>
                         Prontinho
                    </Text>

                    <Text style={style.subtitle}>
                         Agora vamos começar a cuidar das duas plantinhas com muito cuidado
                    </Text>

                    <Button
                         title='Começar'
                    />

               </View>
          </SafeAreaView>
     )
}

const style = StyleSheet.create({
     container: {
          flex: 1,
          width: '100%',
          justifyContent: 'space-around'

     },
     content: {
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
     },
     emoji: {
          fontSize: 78,
          marginBottom: 20,
     },
     title: {
          fontFamily: fonts.heading,
          color: colors.heading,
          fontSize: 26,
          textAlign: 'center',
          lineHeight: 32,
     },
     subtitle: {
          fontFamily: fonts.text,
          textAlign: 'center',
          fontSize: 17,
          paddingVertical: 20,
          color: colors.heading,
          marginBottom: 20,
     }

});