import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{ paddingTop: 24 }}
      className="bg-[#16412b] w-full flex-row items-center pb-4 px-4"
    >
      <Image
        source={require("../assets/images/Elixir.webp")}
        style={{ width: 40, height: 40, marginRight: 5 }}
        resizeMode="contain"
      />
      <Text className="ml-3 text-white font-semibold text-2xl tracking-wide">
        Elixir Club
      </Text>
    </View>
  );
};

export default Header;
