import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
     title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
     return (

          <TouchableOpacity
               style={style.button}
               activeOpacity={0.6}
               {...rest}
          >
               <Text style={style.buttonText}>
                    {title}
               </Text>

          </TouchableOpacity>
     )
}

const style = StyleSheet.create({
     button: {
          backgroundColor: colors.green,
          borderRadius: 16,
          marginBottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
          height: 56,
          paddingHorizontal: 10,
     },
     buttonText: {
          color: colors.white,
          fontSize: 24,
     }
})