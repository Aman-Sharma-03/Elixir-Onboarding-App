import { setLogin } from "@/redux/slices/loginSlice";
import { validate } from "@/utils/Validation";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import ErrorMessage from "../common/ErrorMessage";
import Input from "../common/Input";
import NextButton from "../common/NextButton";

type Props = {
  onSubmit: (phone: string) => void;
};

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
});

export default function LoginForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({
    phone: null,
  });
  const [loginState, setLoginState] = useState<string>("login");
  const [errs, setErrors] = useState<any>({});
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    console.log(errs);
    const isValid = await validate(schema, formData, setErrors);
    if (!isValid) {
      return;
    }
    dispatch(setLogin(loginState));
    onSubmit(formData.phone);
  };

  return (
    <View className="flex-1 w-full p-6 bg-indigo-900">
      <View className="w-full gap-6 mt-16">
        <Text className="text-xl mb-6 font-bold text-white tracking-wide">
          {loginState === "login" ? "Login" : "Signup"} using your mobile number
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
        <ErrorMessage errs={errs} id="phone" />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          className="text-white text-lg font-bold"
          style={{ marginBottom: 10 }}
        >
          Toggle the login and signup
        </Text>
        <Button
          title={loginState === "login" ? "Login" : "Signup"}
          onPress={() =>
            setLoginState(loginState === "login" ? "signup" : "login")
          }
        ></Button>
      </View>

      <NextButton onNext={handleSubmit} />
    </View>
  );
}
