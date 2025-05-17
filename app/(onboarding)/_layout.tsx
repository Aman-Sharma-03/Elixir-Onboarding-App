import { Stack } from "expo-router";
import Header from "../../component/Header";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    />
  );
}
