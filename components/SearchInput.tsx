import { useTodosContext } from '@/context'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar, useTheme } from 'react-native-paper'

interface SearchInputProps {
    value: string;
    updateValue: (newValue: string) => void;
}


export default function SearchInput({ value, updateValue }: SearchInputProps) {


    const { colors } = useTheme()

    const { searchTasks } = useTodosContext()

    const onChange = (newValue: string) => {
        updateValue(newValue)
        searchTasks(newValue)
    }

    return (
        <Searchbar style={styles.searchbar} value={value} onChangeText={onChange} placeholder={'Pesquisar por tarefa'} placeholderTextColor={colors.outline} />
    )
}

const styles = StyleSheet.create({
    searchbar: {
        marginBottom: 16
    }
})