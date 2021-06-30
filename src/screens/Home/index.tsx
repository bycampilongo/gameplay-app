import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Profile } from '../../components/Profile'

import { styles } from './styles'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'


export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendário',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06/2021 às 20:40',
      description: 'É hoje!'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendário',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06/2021 às 20:40',
      description: 'É hoje!'
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
          <View style={styles.content}>
            <ListHeader
              title="Partidas agendadas"
              subtitle="Total 6"
            />
            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment data={item} />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </Background>
  )
}