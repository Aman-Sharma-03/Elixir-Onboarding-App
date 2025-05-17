import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Input from "./Input";
import NextButton from "./NextButton";

type Props = {
  onSubmit: (data: { name: string; email: string }) => void;
};

export default function UserDetailsForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({
    name: "",
    email: "",
  });

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      Alert.alert("Name is required.");
      return;
    }
    if (!validateEmail(formData.email)) {
      Alert.alert("Please enter a valid email.");
      return;
    }

    onSubmit({ name: formData.name.trim(), email: formData.email.trim() });
  };

  return (
    <View className="flex-1 w-full gap-4 mt-16">
      <Text className="text-3xl font-bold self-center mb-6 text-white">
        Your Details
      </Text>
      <Input
        formData={formData}
        setFormData={setFormData}
        id="name"
        placeholder="Name"
        className="mb-6"
      />

      <Input
        formData={formData}
        setFormData={setFormData}
        id="email"
        placeholder="Email"
        className="mb-6"
      />

      <NextButton onNext={handleSubmit} />
    </View>
  );
}
