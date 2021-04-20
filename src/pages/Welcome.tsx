import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from '../components/Button'

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';




export function Welcome() {

     const [visible, setVisible] = useState(true)
     function visibilidade() {
          visible ? setVisible(false) : setVisible(true);
     }




     return (
          <SafeAreaView style={style.container}>
               <Text style={style.title}>
                    Gerencie {'\n'}
                    suas plantas {'\n'}
                    de forma fácil {'\n'}
                    {visible}
               </Text>


               {visible &&
                    <Image source={wateringImg} />
               }


               <Text style={style.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de  lembrar você sempre que precisar.
               </Text>

               <Button title="img" onPress={visibilidade} />
          </SafeAreaView>
     )
}

const style = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     title: {
          color: colors.heading,
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 58,
     },
     subtitle: {
          textAlign: 'center',
          fontSize: 18,
          paddingHorizontal: 20,
          color: colors.body_dark
     },
})