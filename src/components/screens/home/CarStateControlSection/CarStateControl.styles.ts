import styled from "styled-components/native";

const COLORS = {
  gray50: '#e2e2e2',
  gray800: '#282E3F'
}

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ControlContainer = styled.View`
`

export const State = styled.View`
  width: 210px;
  padding: 20px;

  position: relative;

  border-radius: 20px;
  border: 1px solid ${COLORS.gray50};
  margin-bottom: 10px;
`

export const StateDescription = styled.Text`
  color: ${COLORS.gray800};
  opacity: 0.7;
  font-family: 'Sora_400Regular';
  text-align: left;

  position: absolute;

  top: 5px;
  left: 20px;
`

export const StateTitle = styled.Text`
  color: ${COLORS.gray800};
  font-family: 'Sora_800ExtraBold';
  font-size: 25px;

  margin-top: 10px;
`

export const ButtonsContainer = styled.View`

`