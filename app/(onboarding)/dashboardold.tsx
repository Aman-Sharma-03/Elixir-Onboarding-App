import { RootState } from "@/redux/store";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function DashboardOld() {
  const user = useSelector((state: RootState) => state.user);
  const location = useSelector((state: RootState) => state.location);
  console.log(user.login);
  return (
    <View className="flex-1 bg-[#16412b] items-center px-4">
      <View style={{ marginTop: 40 }}>
        <Text className="text-white">Old user: {user.name}</Text>
        <Text className="text-white" style={{ fontSize: 20, marginTop: 30 }}>
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
