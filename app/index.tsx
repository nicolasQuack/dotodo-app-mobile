import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TaskInput } from '@/components'
import { StyleSheet } from 'react-native'

export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  }
})