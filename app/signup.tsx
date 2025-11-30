import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [selected, setSelected] = useState("freelancer"); // default selected

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
          onPress={() => router.push("/welcome")}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>

        {/* White Card */}
        <View style={styles.card}>

          <Text style={styles.title}>Join as a Client or Freelancer</Text>
          <Text style={styles.subtitle}>
            Choose the account type that best describes you
          </Text>

          {/* Client Option */}
          <TouchableOpacity
            style={[
              styles.optionBox,
              selected === "client" && styles.selectedBox,
            ]}
            onPress={() => setSelected("client")}
          >
            {/* Icon */}
            <View style={styles.iconCircle}>
              <Ionicons name="person" size={22} color="white" />
            </View>

            {/* Texts */}
            <View style={styles.optionTexts}>
              <Text style={styles.optionTitle}>I’m a client, hiring for a project</Text>
              <Text style={styles.optionSubtitle}>
                Find talented freelancers to help bring your projects to life.
              </Text>
            </View>

            {/* Checkmark */}
            {selected === "client" && (
              <Ionicons name="checkmark-circle" size={26} color="#3A7BFF" />
            )}
          </TouchableOpacity>

          {/* Freelancer Option */}
          <TouchableOpacity
            style={[
              styles.optionBox,
              selected === "freelancer" && styles.selectedBox,
            ]}
            onPress={() => { 
              setSelected("freelancer")
              router.push("/freelancerSignupForm1");
            }}
          >
            <View style={styles.iconCircleBlue}>
              <FontAwesome name="briefcase" size={20} color="white" />
            </View>

            <View style={styles.optionTexts}>
              <Text style={styles.optionTitle}>I'm a freelancer, looking for work</Text>
              <Text style={styles.optionSubtitle}>
                Discover opportunities and connect with clients seeking your skills.
              </Text>
            </View>

            {selected === "freelancer" && (
              <Ionicons name="checkmark-circle" size={26} color="#3A7BFF" />
            )}
          </TouchableOpacity>

          {/* Bottom Sign in Link */}
          <TouchableOpacity
            onPress={() => router.push("/signin")}
            style={{ marginTop: 30 }}
          >
            <Text style={styles.bottomText}>
              Already have an account?{" "}
              <Text style={styles.bottomLink}>Sign in</Text>
            </Text>
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
  },

  backBtn: {
    marginTop: 20,
    marginLeft: 20,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F8FBFC",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 40,
    marginTop: 150,
  },

  title: {
    fontSize: 24,
    color: "#0F172A",
    textAlign: "center",
    fontFamily: "OpenSans_700Bold",
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#6B7280",
    fontFamily: "OpenSans_400Regular",
    marginTop: 15,
    marginBottom: 35,
  },

  optionBox: {
    flexDirection: "row",
    backgroundColor: "#EED7FF",
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    alignItems: "center",
    marginBottom: 20,
  },

  selectedBox: {
    borderColor: "#3A7BFF",
    shadowColor: "#3A7BFF",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A44DEA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  iconCircleBlue: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#518CF7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  optionTexts: {
    flex: 1,
  },

  optionTitle: {
    color: "#0F172A",
    fontSize: 16,
    fontFamily: "OpenSans_700Bold",
    marginBottom: 4,
  },

  optionSubtitle: {
    color: "#4B5563",
    fontSize: 13,
    fontFamily: "OpenSans_400Regular",
  },

  bottomText: {
    textAlign: "center",
    color: "#4B5563",
    fontFamily: "OpenSans_400Regular",
  },

  bottomLink: {
    color: "#3AB8C2",
    fontFamily: "OpenSans_600SemiBold",
  },
});
