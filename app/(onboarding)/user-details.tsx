import UserDetailsForm from "@/component/Forms/userDetailsForm";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function UserDetailsScreen() {
  const router = useRouter();

  const handleSubmit = (data: { name: string; email: string }) => {
    console.log("User Details:", data);
    router.replace("/dashboard");
  };

  return (
    <View className="bg-[#16412b] flex-1 justify-center items-center px-4 pt-16">
      <UserDetailsForm onSubmit={handleSubmit} />
    </View>
  );
}
