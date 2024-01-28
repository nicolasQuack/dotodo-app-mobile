
import React from 'react'
import { Text, TextProps } from 'react-native-paper'
import { Text as BaseText } from 'react-native'

interface Props extends TextProps<BaseText> {
    fontFamily?: 'RobotoRegular' | 'Pacifico' | 'SpaceMono'
}

export default function Typography({ fontFamily = 'RobotoRegular', style, children, ...rest }: Props) {
    return (
        <Text style={[style, { fontFamily }]} {...rest}>{children}</Text>
    )
}