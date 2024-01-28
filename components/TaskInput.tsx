import { useTodosContext } from '@/context'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper'

interface Props {
    value: string;
    updateValue: (newValue: string) => void;
}

export default function TaskInput({ value, updateValue }: Props) {



    const { colors } = useTheme()

    const { createTask } = useTodosContext()

    const hasText = value !== ""

    function addTask() {
        createTask(value)
    }

    return (
        <Searchbar style={styles.searchbar} value={value} onChangeText={updateValue} icon={'plus'} placeholder={'Qual é a sua tarefa hoje?'} placeholderTextColor={colors.outline} right={() => null} iconColor={hasText ? colors.primary : undefined} onIconPress={hasText ? addTask
            : undefined} />
    )
}

const styles = StyleSheet.create({
    searchbar:{
        marginBottom:16
    }
})