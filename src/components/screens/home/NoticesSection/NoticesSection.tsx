import { Image, View } from "react-native";
import * as S from "./NoticesSection.styles";

export function NoticesSection() {
  return (
    <>
      <S.Title>Como está meu veículo?</S.Title>
      <S.Container
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <S.NoticeBoxContainer>
            <Image
              source={require("../../../../assets/icons/gasoline-icon.png")}
            />

            <View>
              <S.ContentTitle>
                Restam <S.HighlightedText>10 Litros</S.HighlightedText> de
                gasolina
              </S.ContentTitle>
              <S.ContentDescription>
                Posto mais próximo a 20 Km
              </S.ContentDescription>
            </View>
          </S.NoticeBoxContainer>
          <S.NoticeBoxContainer>
            <Image
              source={require("../../../../assets/icons/gasoline-icon.png")}
            />

            <View>
              <S.ContentTitle>
                Restam <S.HighlightedText>10 Litros</S.HighlightedText> de
                gasolina
              </S.ContentTitle>
              <S.ContentDescription>
                Posto mais próximo a 20 Km
              </S.ContentDescription>
            </View>
          </S.NoticeBoxContainer>
          <S.NoticeBoxContainer>
            <Image
              source={require("../../../../assets/icons/gasoline-icon.png")}
            />

            <View>
              <S.ContentTitle>
                Restam <S.HighlightedText>10 Litros</S.HighlightedText> de
                gasolina
              </S.ContentTitle>
              <S.ContentDescription>
                Posto mais próximo a 20 Km
              </S.ContentDescription>
            </View>
          </S.NoticeBoxContainer>
          <S.NoticeBoxContainer>
            <Image
              source={require("../../../../assets/icons/gasoline-icon.png")}
            />

            <View>
              <S.ContentTitle>
                Restam <S.HighlightedText>10 Litros</S.HighlightedText> de
                gasolina
              </S.ContentTitle>
              <S.ContentDescription>
                Posto mais próximo a 20 Km
              </S.ContentDescription>
            </View>
          </S.NoticeBoxContainer>
          <S.NoticeBoxContainer>
            <Image
              source={require("../../../../assets/icons/gasoline-icon.png")}
            />

            <View>
              <S.ContentTitle>
                Restam <S.HighlightedText>10 Litros</S.HighlightedText> de
                gasolina
              </S.ContentTitle>
              <S.ContentDescription>
                Posto mais próximo a 20 Km
              </S.ContentDescription>
            </View>
          </S.NoticeBoxContainer>
          <S.NoticeBoxContainer>
            <Image
              source={require("../../../../assets/icons/gasoline-icon.png")}
            />

            <View>
              <S.ContentTitle>
                Restam <S.HighlightedText>10 Litros</S.HighlightedText> de
                gasolina
              </S.ContentTitle>
              <S.ContentDescription>
                Posto mais próximo a 20 Km
              </S.ContentDescription>
            </View>
          </S.NoticeBoxContainer>
        </View>
      </S.Container>
    </>
  );
}
