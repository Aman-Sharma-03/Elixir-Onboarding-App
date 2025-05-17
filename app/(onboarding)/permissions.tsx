import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import React, { useState } from "react";
import { Alert, Button, Platform, Text, View } from "react-native";

const Permissions = () => {
  const [locationGranted, setLocationGranted] = useState<boolean>(false);
  const [attGranted, setAttGranted] = useState<boolean>(
    Platform.OS === "android"
  ); // Mocking ATT behaviour for android
  const router = useRouter();

  const handleRequestLocationAccess = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setLocationGranted(true);
      } else {
        Alert.alert("Location permission is required");
      }
    } catch (err) {
      Alert.alert("Location permission failed");
    }
  };
  const handleRequestATT = async () => {
    if (Platform.OS === "ios") {
      try {
        const { status } = await requestTrackingPermissionsAsync();
        if (status === "granted") {
          setAttGranted(true);
        } else {
          Alert.alert("ATT permission is optional but recommended.");
        }
      } catch (err) {
        Alert.alert("ATT request failed. Proceeding anyway.");
        setAttGranted(true);
      }
    }
  };
  const handleContinue = () => {
    if (locationGranted && attGranted) {
      router.push("/login");
    } else {
      Alert.alert("Please grant both the permissions to continue");
    }
  };
  return (
    <View>
      <Text>Permission Required</Text>
      <Button
        title={
          locationGranted ? "✅ Location Granted" : "Allow Location Access1"
        }
        onPress={handleRequestLocationAccess}
      />
      <View className="h-4" />
      <Button
        title={attGranted ? "✅ ATT Granted" : "Allow App Tracking (ATT)"}
        onPress={handleRequestATT}
      />
      <View className="h-6" />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default Permissions;
