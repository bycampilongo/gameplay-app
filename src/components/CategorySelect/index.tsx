import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'

import { Category } from '../Category'

import { categories } from '../../utils/categories'

type Props = {
  categorySelected: string;
}

export function CategorySelect({categorySelected} : Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
{
  categories.map(category => (
    <Category 
        key={category.id}
        title={category.title}
        icon={category.icon}
        checked={category.id === categorySelected}
    />
  ))
}
    </ScrollView>
  )
}