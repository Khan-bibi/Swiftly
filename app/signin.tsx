import { useState } from "react";
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  TextInput 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);

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

        {/* White Card Container */}
        <View style={styles.card}>

          <Text style={styles.title}>Welcome Back</Text>

          {/* Username Input */}
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#7A8C99" />
            <TextInput 
              style={styles.input}
              placeholder="Freelancer"
              placeholderTextColor="#7A8C99"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#7A8C99" />
            <TextInput 
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#7A8C99"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons 
                name={passwordVisible ? "eye-off-outline" : "eye-outline"} 
                size={22} 
                color="#7A8C99" 
              />
            </TouchableOpacity>
          </View>

          {/* Remember Me + Forgot Password */}
          <View style={styles.rowBetween}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => setRemember(!remember)}
            >
              <Ionicons 
                name={remember ? "checkbox" : "square-outline"} 
                size={22} 
                color="#4CAF50" 
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.forgotText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or sign in with</Text>
            <View style={styles.divider} />
          </View>

          {/* Google Login */}
          <TouchableOpacity style={styles.googleBtn}>
            <FontAwesome5 name="google" size={28} color="#4285F4" />
          </TouchableOpacity>

          {/* Sign Up Link */}
          <TouchableOpacity 
            onPress={() => router.push("/signup")}
            style={{ marginTop: 20 }}
          >
            <Text style={styles.signupText}>
              Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
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

  /* White card */
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
    fontSize: 28,
    fontFamily: "OpenSans_700Bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#0F172A",
  },

  /* Input fields */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 25,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "OpenSans_400Regular",
    color: "#0F172A",
  },

  /* Remember me + Forgot Password */
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rememberText: {
    marginLeft: 6,
    fontFamily: "OpenSans_400Regular",
    color: "#0F172A",
  },

  forgotText: {
    color: "#3AB8C2",
    fontFamily: "OpenSans_400Regular",
  },

  /* Sign In Button */
  signInBtn: {
    backgroundColor: "#7EC8B7",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0F172A",
    width: "50%",
    alignSelf: "center",
    marginBottom: 30,
  },

  signInText: {
    fontSize: 18,
    fontFamily: "OpenSans_700Bold",
    color: "#0F172A",
  },

  /* Divider */
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D4D4D8",
  },

  dividerText: {
    marginHorizontal: 8,
    fontFamily: "OpenSans_400Regular",
    color: "#6B7280",
  },

  /* Google icon */
  googleBtn: {
    alignSelf: "center",
    padding: 8,
  },

  /* Bottom signup link */
  signupText: {
    textAlign: "center",
    fontFamily: "OpenSans_400Regular",
    color: "#4B5563",
  },

  signupLink: {
    color: "#3AB8C2",
    fontFamily: "OpenSans_600SemiBold",
  },
});
