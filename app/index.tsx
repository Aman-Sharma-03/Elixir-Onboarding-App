import { View } from "react-native";
import Permissions from "./(onboarding)/permissions";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Permissions />
    </View>
  );
}
