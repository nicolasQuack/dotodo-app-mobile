import React, { useState } from 'react'
import { SearchInput, TaskInput } from '@/components'
import { FlatList, StyleSheet, View } from 'react-native'
import { useTodosContext } from '@/context'
import { Task } from '@/@types'
import { TaskCard } from '@/components'

export default function home() {

  const [searchText, setSearchText] = useState("")

  const { tasks, filteredTasks, handleTaskComplete, deleteTask } = useTodosContext()

  const myTasks = searchText === "" ? tasks : filteredTasks

  function renderTaskCard({ item }: { item: Task }) {
    return <TaskCard {...item} onComplete={() => handleTaskComplete(item.id)} onDelete={() => deleteTask(item.id)} />
  }

  return (
    <View style={styles.container} >
      <View style={styles.taskInputWrapper}>
        <TaskInput />
        <SearchInput value={searchText} updateValue={setSearchText}/>
      </View>
      <FlatList data={myTasks} renderItem={renderTaskCard} contentContainerStyle={styles.list} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  taskInputWrapper: {
    paddingHorizontal: 16,
  },
  list: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  }
})