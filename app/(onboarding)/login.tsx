import LoginForm from "@/component/LoginForm";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (phone: string) => {
    console.log("Mock Sending OTP to: ", phone);
    router.push({
      pathname: "/otp",
      params: { phone },
    });
  };
  return (
    <View className="bg-[#16412b] flex-1 px-4 pt-12">
      <LoginForm onSubmit={handleSubmit} />
    </View>
  );
};

export default Login;
