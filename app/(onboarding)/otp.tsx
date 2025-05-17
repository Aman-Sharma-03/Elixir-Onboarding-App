import OTPForm from "@/component/Forms/OTPForm";
import { getOTPStatus } from "@/services/OTPVerification";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const OTP = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (otp: number) => {
    setProcessing(true);
    const otpStatus = await getOTPStatus();
    console.log("otpStatus" + otpStatus);
    setProcessing(false);
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
      {processing && (
        <View className="mb-4 mt-8">
          <Text className="text-white text-center text-lg">
            Processing OTP...
          </Text>
        </View>
      )}
    </View>
  );
};

export default OTP;
