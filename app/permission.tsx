import Permissions from "@/component/permissions";
import React from "react";
import { View } from "react-native";

export default function Permission() {
  return (
    <View className="bg-[#16412b] flex-1 p-6 items-center">
      <Permissions />
    </View>
  );
}
