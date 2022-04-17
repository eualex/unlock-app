import * as S from "./NavigationMenu.styles";

import Icon from "react-native-vector-icons/Feather";
import { Image, TouchableOpacity } from "react-native";

export function NavigationMenu() {
  return (
    <S.Container>
      <S.Wrapper>
        <TouchableOpacity
          style={{ borderBottomWidth: 1, borderBottomColor: "#000" }}
        >
          <Image source={require("../../../../assets/icons/home-icon.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/car-icon.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/char-icon.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/icons/notification-icon.png")}
          />
        </TouchableOpacity>
      </S.Wrapper>
    </S.Container>
  );
}
