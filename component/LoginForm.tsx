import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

type Props = {
  onSubmit: (phone: string) => void;
};

export default function LoginForm({ onSubmit }: Props) {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length !== 10) {
      Alert.alert("Please enter a valid 10-digit phone number.");
      return;
    }

    onSubmit(`+91${cleaned}`); // Or whatever country code you use
  };

  return (
    <View className="w-full gap-4">
      <Text className="text-lg font-semibold">Enter your phone number</Text>

      <TextInput
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        placeholder="e.g. 9876543210"
        className="border border-gray-300 rounded-lg p-3 text-base"
        maxLength={14}
      />

      <Button title="Send OTP" onPress={handleSubmit} />
    </View>
  );
}
