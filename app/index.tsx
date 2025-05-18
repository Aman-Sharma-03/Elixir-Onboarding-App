import { View } from "react-native";
import Permissions from "./permissions";

export default function Index() {
  return (
    <View className="bg-[#16412b] flex-1 p-6 items-center">
      <Permissions />
    </View>
  );
}
