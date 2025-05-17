import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

type Props = {
  onNext: () => void;
};

const NextButton = ({ onNext }: Props) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 12,
        right: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
      }}
    >
      <TouchableOpacity
        onPress={onNext}
        style={{
          backgroundColor: "#57F2A0",
          height: 56,
          width: 56,
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
        }}
        activeOpacity={0.7}
      >
        <Image
          source={require("../assets/images/ChevronRight.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
