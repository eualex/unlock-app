import { ReactText } from "react";
import { GestureResponderEvent, TouchableOpacity, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from 'react-native-vector-icons/Feather';


import * as S from "./Button.styles";

type ButtonProps = {
  children: ReactText;
  theme: "danger" | "primary";
  style?: ViewStyle;
  icon?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
};

export function Button(props: ButtonProps) {
  const colors =
    props.theme === "danger" ? ["#F53D5E", "#F53D5E"] : ["#60B0FF", "#0582FF"];

  return (
    <TouchableOpacity onPress={props?.onPress}>
      <LinearGradient
        colors={colors}
        style={{
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...props.style,
        }}
      >
        <S.Button>{props.children}</S.Button>

        {props.icon && <Icon name={props.icon} size={26} color="#fff" />}
      </LinearGradient>
    </TouchableOpacity>
  );
}
