import { useState } from "react";
import { Image } from "react-native";
import { Button } from "../../../shared/form";

import * as S from "./CarStateControl.styles";

export function CarStateControlSection() {
  return (
    <S.Container>
      <Image source={require("../../../../assets/locked-car.png")} />

      <S.ControlContainer>
        <S.State>
          <S.StateDescription>status:</S.StateDescription>
          <S.StateTitle>TRANCADO</S.StateTitle>
        </S.State>

        <Button theme="primary" icon="unlock" >DESTRAVAR</Button>
        <Button theme="danger"  icon="lock" style={{ marginTop: 5 }}>
          TRAVAR
        </Button>
      </S.ControlContainer>
    </S.Container>
  );
}
