import { useRouter } from "expo-router";
import { 
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

export default function WelcomeBack() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/welcome.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>

        {/* Back Button */}
        <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.push("/onboarding3")}>
        <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>

        {/* Center Content */}
        <View style={styles.centerContent}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Enjoy your real-time freelancing experience
          </Text>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  safe: {
    flex: 1,
    justifyContent: "space-between",
  },

  /* Back button */
  backBtn: {
    marginTop: 20,
    marginLeft: 20,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  /* Welcome Texts */
  centerContent: {
    alignItems: "center",
    marginTop: -30,
  },

  title: {
    fontSize: 36,
    color: "white",
    fontFamily: "OpenSans_700Bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#D9E1FF",
    textAlign: "center",
    width: "90%",
    marginTop: 10,
    fontFamily: "OpenSans_600SemiBold_Italic",
  },

  /* Bottom buttons */
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 25,
    marginBottom: 50,
  },

  signInBtn: {
    paddingVertical: 14,
    width: "40%",
    marginLeft: 40,
  },

  signInText: {
    color: "white",
    fontSize: 18,
    fontFamily: "OpenSans_600SemiBold",
  },

  signUpBtn: {
    backgroundColor: "#7EC8B8",
    paddingVertical: 14,
    borderRadius: 20,
    width: "40%",
    alignItems: "center",
    borderColor: "#0F172A",
    borderWidth: 2,
  },

  signUpText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "OpenSans_700Bold",
  },
});
