import styled from 'styled-components/native'
import Constants from 'expo-constants'

const COLORS = {
  blue300: '#0582FF'
}

export const Container = styled.View`
  flex: 1;
  padding: 0 28px;
  padding-top: ${Constants.statusBarHeight + 40}px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const WelcomeMessageContainer = styled.View``

export const Title = styled.Text`
  font-family: 'Sora_600SemiBold';
`

export const TextColor = styled.Text`
  font-family: 'Sora_600SemiBold';
  color: ${COLORS.blue300};
`

export const Description = styled.Text`
  font-family: 'Sora_600SemiBold';
`

