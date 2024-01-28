import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { useTheme } from 'react-native-paper';

interface SepartorProps {

    style?: ViewStyle;
    color?: keyof MD3Colors
}

export default function Separator({ style, color = 'outline' }: SepartorProps) {

    const { colors } = useTheme()

    return (
        <View style={[styles.separator, { backgroundColor: colors[color] as string }, style]} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        marginVertical:8
    }
})