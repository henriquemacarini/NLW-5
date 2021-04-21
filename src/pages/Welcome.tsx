import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';




export function Welcome() {

     const navigation = useNavigation();//para fazer a navegação

     function handleStart() {
          navigation.navigate('UserIdentification')
     }

     return (
          <SafeAreaView style={style.container}>
               <View style={style.wrapper}>
                    <Text style={style.title}>
                         Gerencie {'\n'}
                         suas plantas de{'\n'}
                         forma fácil
                    </Text>

                    <Image
                         source={wateringImg} style={style.img}
                         resizeMode='contain'
                    />


                    <Text style={style.subtitle}>
                         Não esqueça mais de regar suas plantas.
                         Nós cuidamos de lembrar você sempre que precisar.
                    </Text>

                    <TouchableOpacity
                         style={style.button}
                         activeOpacity={0.6}
                         onPress={handleStart}
                    >
                         <Entypo name="chevron-thin-right" size={20} color={colors.background} />

                    </TouchableOpacity>
               </View>
          </SafeAreaView>
     )
}

const style = StyleSheet.create({
     container: {
          flex: 1,
     },
     wrapper: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: 10,
     },
     title: {
          color: colors.heading,
          fontFamily: fonts.heading,
          lineHeight: 34,
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 58,
     },
     subtitle: {
          fontFamily: fonts.text,
          textAlign: 'center',
          fontSize: 17,
          paddingHorizontal: 20,
          color: colors.body_dark
     }, button: {
          backgroundColor: colors.green,
          borderRadius: 16,
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
          height: 56,
          width: 56,
     },
     buttonText: {
          color: colors.white,
          fontSize: 24,
     },
     img: {
          height: Dimensions.get('window').width * 0.7
     }
})