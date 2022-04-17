import { Image } from "react-native";
import { CarStateControlSection, NoticesSection } from "../../components/screens/home";

import * as S from "./home.styles";

export function HomeScreen() {
  return (
    <S.Container>
      <S.Header>
        <Image source={require("../../assets/icons/burguer-icon.png")} />

        <S.WelcomeMessageContainer>
          <S.Title>
            Olá, <S.TextColor>Alex</S.TextColor>
          </S.Title>
          <S.Description>Boa noite</S.Description>
        </S.WelcomeMessageContainer>
      </S.Header>
      <CarStateControlSection />
      <NoticesSection />
    </S.Container>
  );
}
