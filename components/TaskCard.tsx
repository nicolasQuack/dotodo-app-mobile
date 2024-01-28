import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Task } from '@/@types'
import { IconButton, Surface, useTheme } from 'react-native-paper';
import Typography from './Typography';
import Separator from './Separator';

interface TaskCardProps extends Task {
  onComplete: () => void;
  onDelete: () => void;
}

export default function TaskCard({ onComplete, onDelete, description, createdAt, isCompleted }: TaskCardProps) {

  const formatedData = new Date(createdAt).toLocaleDateString()

  const { colors } = useTheme()


  return (
    <Surface style={styles.container} elevation={3}>
      <Typography variant='titleLarge'>{description}</Typography>
      <Separator />
      <View style={styles.row}>
        <Typography variant='titleMedium' color='outline'>{formatedData}</Typography>
        <View style={styles.row}>
          <IconButton icon={'delete'} iconColor={colors.error} onPress={onDelete} />
          <View style={[styles.separator,{backgroundColor:colors.outlineVariant}]}/>
          <IconButton icon={isCompleted ? 'minus' : 'check'} iconColor={isCompleted ? colors.secondary : colors.primary} onPress={onComplete} />
        </View>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 15,
    marginVertical: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  separator:{
    height: 40,
    width:1
  }
})