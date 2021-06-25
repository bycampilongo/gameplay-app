import React from 'react'
import { View, Text } from 'react-native'
import { Profile } from '../../components/Profile'

import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect />
      </View>
    </View>
  )
}