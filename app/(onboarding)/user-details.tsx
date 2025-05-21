import UserDetailsForm from "@/component/Forms/userDetailsForm";
import { setEmail, setName } from "@/redux/slices/userSlice";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { useDispatch } from "react-redux";

export default function UserDetailsScreen() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (data: { name: string; email: string }) => {
    // console.log("User Details:", data);
    dispatch(setName(data.name));
    dispatch(setEmail(data.email));
    router.replace("/permission");
  };

  return (
    <View className="bg-[#16412b] flex-1 justify-center items-center px-4 pt-16">
      <UserDetailsForm onSubmit={handleSubmit} />
    </View>
  );
}
