import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Input from "./Input";
import NextButton from "./NextButton";

type Props = {
  onSubmit: (phone: string) => void;
};

export default function LoginForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({ phone: "" });

  const handleSubmit = () => {
    const cleaned = formData.phone.trim();

    if (cleaned.length !== 10) {
      Alert.alert("Please enter a valid 10-digit phone number.");
      return;
    }

    onSubmit(`+91${cleaned}`);
  };

  return (
    <View className="flex-1 w-full p-6 bg-indigo-900">
      <View className="w-full gap-6 mt-16">
        <Text className="text-xl mb-6 font-bold text-white tracking-wide">
          Login using your mobile number
        </Text>

        <View className="mt-2">
          <Input
            id="phone"
            formData={formData}
            setFormData={setFormData}
            placeholder="Phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <NextButton onNext={handleSubmit} />
    </View>
  );
}
