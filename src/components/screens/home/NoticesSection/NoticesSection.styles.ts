import styled from "styled-components/native";

const COLORS = {
  gray50: '#c3c3c3',
  gray800: '#282E3F',
  yellow: '#DDCF52'
}

export const Container = styled.ScrollView`
  flex: 1;
`

export const Title = styled.Text`
  color: ${COLORS.gray800};
  font-family: 'Sora_700Bold';
  font-size: 16px;

  margin-top: 10px;
  padding-bottom: 10px;
`

export const NoticeBoxContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 10px;
  padding: 15px 30px;

  border-radius: 10px;
  border: 1px solid ${COLORS.gray50};
`

export const HighlightedText = styled.Text`
  color: ${COLORS.yellow};
`

export const ContentTitle = styled.Text`
  font-family: 'Sora_600SemiBold';
  color: ${COLORS.gray800};
`

export const ContentDescription = styled.Text`
  font-family: 'Sora_500Medium';
  color: ${COLORS.gray800};
  opacity: 0.7;
`
