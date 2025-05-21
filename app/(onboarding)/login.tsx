import LoginForm from "@/component/Forms/LoginForm";
import { setPhone } from "@/redux/slices/userSlice";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (phone: string) => {
    // console.log("Mock Sending OTP to: ", phone);
    dispatch(setPhone(phone));
    router.replace({
      pathname: "/otp",
    });
  };
  return (
    <View className="bg-[#16412b] flex-1 px-4 pt-12">
      <LoginForm onSubmit={handleSubmit} />
    </View>
  );
};

export default Login;
