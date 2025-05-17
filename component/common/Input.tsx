import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends Omit<TextInputProps, "value" | "onChangeText"> {
  formData: Record<string, any>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  id: string;
  placeholder: string;
  keyboardType?: TextInputProps["keyboardType"];
  maxLength?: number;
  className?: string;
}

const Input = ({
  formData,
  setFormData,
  id,
  placeholder,
  keyboardType = "default",
  maxLength,
  className = "",
  ...rest
}: InputProps) => {
  const handleValueChange = (text: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: text,
    }));
  };

  return (
    <TextInput
      keyboardType={keyboardType}
      value={formData[id]}
      onChangeText={handleValueChange}
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
      style={{
        marginTop: 10,
        backgroundColor: "white",
        opacity: 0.75,
        borderRadius: 9999,
        paddingVertical: 16,
        paddingHorizontal: 32,
        fontSize: 18,
        color: "#333",
      }}
      maxLength={maxLength}
      {...rest}
      className={className}
    />
  );
};

export default Input;
