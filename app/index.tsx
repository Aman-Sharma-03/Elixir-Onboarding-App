import { View } from "react-native";
import UserDetailsScreen from "./(onboarding)/user-details";

export default function Index() {
  return (
    <View className="bg-[#16412b] flex-1 p-6 items-center">
      {/* <Permissions /> */}
      <UserDetailsScreen />
    </View>
  );
}
