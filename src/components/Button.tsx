import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonsProps extends TouchableOpacityProps {
     title: string,
}

export function Button({ title, ...rest }: ButtonsProps) {
     return (
          <TouchableOpacity
               style={style.button}
               {...rest} //Tem q colocar
          >
               <Text style={style.text}>
                    {title}
               </Text>
          </TouchableOpacity>
     )
}

const style = StyleSheet.create({
     button: {
          backgroundColor: colors.green,
          height: 56,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',


     },
     text: {
          fontFamily: fonts.text,
          color: colors.white,
          fontSize: 17,
          textAlign: 'center'
     }
})