import { useState } from "react";
import { Image } from "react-native";
import { Button } from "../../../shared/form";

import * as S from "./CarStateControl.styles";

export function CarStateControlSection() {
  const [isLocked, setIsLocked] = useState(false);

  const lockedMessage = isLocked ? "trancado" : "aberto";

  return (
    <S.Container>
      {isLocked ? (
        <Image source={require("../../../../assets/locked-car.png")} />
      ) : (
        <Image source={require("../../../../assets/unlocked-car.png")} />
      )}

      <S.ControlContainer>
        <S.State>
          <S.StateDescription>status:</S.StateDescription>
          <S.StateTitle>{lockedMessage}</S.StateTitle>
        </S.State>

        <Button
          theme="primary"
          icon="unlock"
          onPress={() => setIsLocked(false)}
        >
          DESTRAVAR
        </Button>
        <Button
          theme="danger"
          icon="lock"
          style={{ marginTop: 5 }}
          onPress={() => setIsLocked(true)}
        >
          TRAVAR
        </Button>
      </S.ControlContainer>
    </S.Container>
  );
}
