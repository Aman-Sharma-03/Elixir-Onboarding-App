import { RootState } from "@/redux/store";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.user);
  const location = useSelector((state: RootState) => state.location);
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
      <View style={{ marginTop: 40 }}>
        <Text className="text-white" style={{ fontSize: 20 }}>
          Redux State Demo:{" "}
        </Text>
        <Text className="text-white">Name: {user.name}</Text>
        <Text className="text-white">Email: {user.email}</Text>
        <Text className="text-white">Phone: {user.phone}</Text>
        <Text className="text-white">Latitude: {location.latitude}</Text>
        <Text className="text-white">Longitude: {location.longitude}</Text>
      </View>
    </View>
  );
}
