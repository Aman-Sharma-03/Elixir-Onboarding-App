import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

type Props = {
  onSubmit: (data: { name: string; email: string }) => void;
};

export default function UserDetailsForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Name is required.");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Please enter a valid email.");
      return;
    }

    onSubmit({ name: name.trim(), email: email.trim() });
  };

  return (
    <View className="w-full gap-4">
      <Text className="text-lg font-semibold">Enter your details</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        className="border border-gray-300 rounded-lg p-3 text-base"
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="border border-gray-300 rounded-lg p-3 text-base"
      />

      <Button title="Continue" onPress={handleSubmit} />
    </View>
  );
}
