import { Image, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View className="flex-1 bg-[#16412b] items-center px-4">
      <Image
        source={require("../../assets/images/Success.png")}
        style={{ width: 200, height: 200, marginTop: 100 }}
      />
      <Text className="text-3xl font-bold text-white my-2">
        Onboarding Complete
      </Text>
      <Text className="text-lg text-white text-center">
        You’ve completed the onboarding process.
      </Text>
      <Text className="text-lg text-white text-center mt-2">
        We are working of exciting features
      </Text>
      <Text className="text-lg text-white text-center">Stay tuned...</Text>
    </View>
  );
}
