import {
  handleRequestATT,
  handleRequestLocationAccess,
} from "@/utils/Permissions";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Permissions = () => {
  const [locationGranted, setLocationGranted] = useState<boolean>(false);
  const [attGranted, setAttGranted] = useState<boolean>(
    Platform.OS === "android"
  ); // Mocking ATT behaviour for android
  const router = useRouter();

  const handleContinue = (locationOk: boolean, attOk: boolean) => {
    if (locationOk && attOk) {
      router.push("/login");
    } else {
      Alert.alert("Please grant both the permissions to continue");
    }
  };

  const handleGetStarted = async () => {
    try {
      const locationOk = await handleRequestLocationAccess(setLocationGranted);
      if (!locationOk) return;
      await handleRequestATT(setAttGranted);
      handleContinue(locationOk, attGranted);
    } catch (err) {
      Alert.alert("Something went wrong");
    }
  };
  return (
    <View className="flex-1">
      <View className="mt-16 mx-auto w-full flex flex-col items-center">
        <Image
          source={require("../assets/images/Elixir.webp")}
          className="w-28 h-28 self-center mt-12 mb-8"
        />
        <Text className="self-center text-white font-semibold text-4xl tracking-wide">
          Elixir Club
        </Text>
      </View>
      <View className="mt-16 text-white">
        <Text className="text-white text-xl">Wellness is more than health</Text>
      </View>
      <View className="flex-1" />
      <TouchableOpacity
        className="bg-[#57F2A0] py-4 rounded-full mb-10"
        onPress={handleGetStarted}
      >
        <View className="flex flex-row items-center justify-center px-12">
          <Text className="text-center text-black font-bold text-lg mr-2">
            Get Started
          </Text>
          <Image
            source={require("../assets/images/ChevronRight.png")}
            className="text-black w-6 h-6"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Permissions;
