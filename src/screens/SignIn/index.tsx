import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { style } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function SignIn() {
  const navigation = useNavigation();


  const handleSignIn = () => {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={style.container}>
        <Image
          source={IllustrationImg}
          style={style.image}
          resizeMethod="resize"
        />
        <View style={style.content}>
          <Text style={style.title}>
            Conecte-se {`\n`}
            e organize suas{`\n`}
            jogatinas
          </Text>
          <Text style={style.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}
