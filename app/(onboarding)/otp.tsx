import OTPForm from "@/component/Forms/OTPForm";
import { setLogin } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { getOTPStatus } from "@/services/OTPVerification";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const OTP = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.login);

  const handleSubmit = async (otp: number) => {
    setProcessing(true);
    const loginStatus = loginState.loginType as string;
    const otpStatus = await getOTPStatus(loginStatus);
    if (otpStatus === "login") {
      dispatch(setLogin(true));
    }
    setProcessing(false);
    console.log(otpStatus);
    if (otpStatus === "login") {
      // Alert.alert("OTP Mocking Successful");
      router.replace("/dashboardold");
    } else if (otpStatus === "signup") {
      router.replace("/dashboardnew");
    } else {
      Alert.alert("Wrong OTP");
    }
  };

  return (
    <View className="bg-[#16412b] flex-1 px-4 pt-12 relative">
      <OTPForm onSubmit={handleSubmit} />

      {processing && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#57F2A0" />
          <Text style={styles.overlayText}>Processing OTP...</Text>
        </View>
      )}
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: -80,
    left: 0,
    width,
    height,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  overlayText: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default OTP;
