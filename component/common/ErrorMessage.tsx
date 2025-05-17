import React from "react";
import { Text } from "react-native";

const ErrorMessage = ({ errs, id }: { errs: any; id: string }) => {
  return errs[id] && <Text style={{ color: "red" }}>{errs[id]}</Text>;
};

export default ErrorMessage;
