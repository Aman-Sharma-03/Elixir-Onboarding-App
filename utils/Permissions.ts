// import * as Location from "expo-location";
// import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { Alert, Platform } from "react-native";

export const handleRequestLocationAccess = async (setLocationGranted: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      // First, check if location services are enabled
      const Location = await import("expo-location");
      const servicesEnabled = await Location.hasServicesEnabledAsync();
      if (!servicesEnabled) {
        Alert.alert(
          "Location Services Off",
          "Please turn on your device's location services to continue."
        );
        return { granted: false };
      }
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setLocationGranted(true);
        const location = await Location.getCurrentPositionAsync({});

        return {
          granted: true,
          coords: location.coords,
          timestamp: location.timestamp,
        };
      } else {
        Alert.alert("Location permission is required");
        return { granted: false };
      }
    } catch (err) {
      Alert.alert("Location permission failed");
      return { granted: false };
    }
  };

 export const handleRequestATT = async (setAttGranted: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (Platform.OS === "ios") {
      try {
        const {requestTrackingPermissionsAsync} = await import("expo-tracking-transparency");
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