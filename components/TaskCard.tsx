import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Task } from '@/@types'
import { Surface } from 'react-native-paper';
import Typography from './Typography';
import Separator from './Separator';

interface TaskCardProps extends Task {
  onComplete: () => void;
  onDelete: () => void;
}

export default function TaskCard({ onComplete, onDelete, description,createdAt }: TaskCardProps) {

  const formatedData = new Date(createdAt).toLocaleDateString()


  return (
    <Surface style={styles.container} elevation={3}>
      <Typography variant='titleLarge'>{description}</Typography>
      <Separator />
      <View style={styles.row}>
    <Typography variant='titleMedium' color='outline'>{formatedData}</Typography>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 15,
    minHeight: 150,
    marginVertical: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})