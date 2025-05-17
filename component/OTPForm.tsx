import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "./Input";
import NextButton from "./NextButton";

type Props = {
  onSubmit: (otp: number) => void;
};

const OTPForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<Record<string, any>>({
    otp: null,
  });

  const handleSubmit = () => {
    // Submit with phone number
    if (!formData.otp) {
      return;
    }
    onSubmit(formData.otp);
  };

  return (
    <View className="flex-1 p-6 bg-indigo-900">
      <View className="w-full gap-6 mt-16">
        <Text className="text-xl mb-6 font-bold text-white tracking-wide">
          Please Enter the OTP:
        </Text>

        <View className="mt-2">
          <Input
            formData={formData}
            setFormData={setFormData}
            id="otp"
            placeholder="OTP"
            keyboardType="phone-pad"
            maxLength={6}
          />
        </View>
      </View>

      <NextButton onNext={handleSubmit} />
    </View>
  );
};

export default OTPForm;
