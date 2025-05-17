import LoginForm from "@/component/LoginForm";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const handlePhoneSubmit = (phone: string) => {
    console.log("Mock Sending OTP to: ", phone);
    router.push({
      pathname: "/(onboarding)/user-details",
      params: { phone },
    });
  };
  return (
    <View>
      <Text>Login</Text>
      <LoginForm onSubmit={handlePhoneSubmit} />
    </View>
  );
};

export default Login;
