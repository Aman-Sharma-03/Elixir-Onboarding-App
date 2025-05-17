import { validate } from "@/utils/Validation";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import ErrorMessage from "../common/ErrorMessage";
import Input from "../common/Input";
import NextButton from "../common/NextButton";

type Props = {
  onSubmit: (otp: number) => void;
};

const schema = yup.object().shape({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^[0-9]{4}$/, "OTP must be 4 digits"),
});

const OTPForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<Record<string, any>>({
    otp: null,
  });
  const [errs, setErrors] = useState<any>({});
  const router = useRouter();

  const handleSubmit = async () => {
    // Submit with phone number
    const isValid = await validate(schema, formData, setErrors);
    if (!isValid) {
      return;
    }
    onSubmit(formData.otp);
  };

  const handleChangeNumber = () => {
    router.replace("/login");
  };

  return (
    <View className="flex-1 p-6 bg-indigo-900">
      <View className="w-full gap-6 mt-16">
        <Text className="text-xl mb-6 font-bold text-white tracking-wide">
          Verify your number:
        </Text>

        <View className="mt-2">
          <Input
            formData={formData}
            setFormData={setFormData}
            id="otp"
            placeholder="OTP"
            keyboardType="phone-pad"
            maxLength={4}
          />
          <ErrorMessage errs={errs} id="otp" />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleChangeNumber}
        className="self-center"
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "#57F2A0", textDecorationLine: "underline" }}>
          Use a different number
        </Text>
      </TouchableOpacity>

      <NextButton onNext={handleSubmit} />
    </View>
  );
};

export default OTPForm;
