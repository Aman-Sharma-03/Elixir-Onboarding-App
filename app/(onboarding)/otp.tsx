import OTPForm from "@/component/Forms/OTPForm";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, View } from "react-native";

const OTP = () => {
  const getOTPStatus = async () => {
    return new Promise((resolve, reject) => {
      resolve(setTimeout(() => true, 300));
    });
  };
  const router = useRouter();
  const handleSubmit = async (otp: number) => {
    const otpStatus = await getOTPStatus();
    if (otpStatus) {
      Alert.alert("OTP Mocking Successful");
      router.replace("/user-details");
    } else {
      Alert.alert("Wrong OTP");
    }
  };
  return (
    <View className="bg-[#16412b] flex-1 px-4 pt-12">
      <OTPForm onSubmit={handleSubmit} />
    </View>
  );
};

export default OTP;
