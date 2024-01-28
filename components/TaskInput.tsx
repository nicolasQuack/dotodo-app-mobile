import { useTodosContext } from '@/context'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper'


export default function TaskInput() {

    const [value, setValue] = useState("")

    const { colors } = useTheme()

    const { createTask } = useTodosContext()

    const hasText = value !== ""

    function addTask() {
        createTask(value)
    }

    return (
        <Searchbar style={styles.searchbar} value={value} onChangeText={setValue} icon={'plus'} placeholder={'Qual é a sua tarefa hoje?'} placeholderTextColor={colors.outline} right={() => null} iconColor={hasText ? colors.primary : undefined} onIconPress={hasText ? addTask
            : undefined} />
    )
}

const styles = StyleSheet.create({
    searchbar: {
        marginBottom: 16
    }
})