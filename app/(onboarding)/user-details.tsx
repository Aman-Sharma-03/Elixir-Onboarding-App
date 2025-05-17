import UserDetailsForm from "@/component/userDetailsForm";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function UserDetailsScreen() {
  const router = useRouter();

  const handleSubmit = (data: { name: string; email: string }) => {
    console.log("User Details:", data);
    router.replace("/dashboard");
  };

  return (
    <View className="flex-1 justify-center items-center px-4 bg-white">
      <Text className="text-2xl font-bold mb-6">Your Details</Text>
      <UserDetailsForm onSubmit={handleSubmit} />
    </View>
  );
}
