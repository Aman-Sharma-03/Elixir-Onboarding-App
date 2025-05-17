import { validate } from "@/utils/Validation";
import { useState } from "react";
import { Text, View } from "react-native";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import NextButton from "./NextButton";

type Props = {
  onSubmit: (data: { name: string; email: string }) => void;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

export default function UserDetailsForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({
    name: "",
    email: "",
  });
  const [errs, setErrors] = useState<any>({});

  const handleSubmit = async () => {
    const isValid = await validate(schema, formData, setErrors);
    if (!isValid) {
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
      <ErrorMessage errs={errs} id="name" />

      <Input
        formData={formData}
        setFormData={setFormData}
        id="email"
        placeholder="Email"
        className="mb-6"
      />
      <ErrorMessage errs={errs} id="email" />

      <NextButton onNext={handleSubmit} />
    </View>
  );
}
