import { Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="text-3xl font-bold text-blue-600 mb-2">🎉 Welcome!</Text>
      <Text className="text-lg mt-4">
        {/* Hello, {user.name}! ({user.email}) */}
      </Text>
      <Text className="text-lg text-gray-700 text-center">
        You’ve successfully completed the onboarding process.
      </Text>
    </View>
  );
}
