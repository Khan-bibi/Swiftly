import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function Splash() {
  const router = useRouter();
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        router.replace("/onboarding1");
      }, 800);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/logo.png")}
        style={[styles.logo, { opacity }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
});
