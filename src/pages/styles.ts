import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: #121015;
  padding-left: 30px;
  padding-top: 70px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`

export const Greeting = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`

export const Input = styled.TextInput`
  padding: ${Platform.OS === 'ios' ? '15px' : '10px'};
  background-color: grey;
  border-radius: 7px;
  font-size: 18px;
  margin-top: 20px;
`