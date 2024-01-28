
import React from 'react'
import { Text, TextProps, useTheme } from 'react-native-paper'
import { Text as BaseText } from 'react-native'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'

interface Props extends TextProps<BaseText> {
    fontFamily?: 'RobotoRegular' | 'Pacifico' | 'SpaceMono',
    color?: keyof MD3Colors
}

export default function Typography({ fontFamily = 'RobotoRegular', style, color = 'onBackground', children, ...rest }: Props) {


    const { colors } = useTheme()

    return (
        <Text style={[{ fontFamily, color: colors[color] as string }, style,]} {...rest}>{children}</Text>
    )
}