import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function FreelancerSignupStep1() {
  const router = useRouter();

  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [about, setAbout] = useState("");

  const statusOptions = [
    "Undergraduate",
    "Graduate",
    "Working Professional",
    "Independent Professional",
    "Student",
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>

        {/* Blue Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.push("/signup")}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Let's Get{"\n"}Started</Text>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => router.push("/freelancerSignupForm2")}
          >
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* WHITE WRAPPER: full-screen white area with rounded top.
            Important: overflow hidden -> prevents children from drawing outside rounded corners */}
        <View style={styles.whiteWrapper}>

          {/* KeyboardAvoidingView inside white wrapper (with offset) */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={{ flex: 1 }}
          >
            {/* ScrollView must fill available space; use style={{flex:1}} */}
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.card}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.sectionSubtitle}>
                Let’s start with your basic details
              </Text>

              {/* Profile Picture Upload */}
              <View style={styles.profileContainer}>
                <View style={styles.profileCircle}>
                  <Ionicons name="camera-outline" size={40} color="#2563EB" />
                </View>

                <TouchableOpacity style={styles.uploadBtn}>
                  <Text style={styles.uploadBtnText}>Upload Picture</Text>
                </TouchableOpacity>
              </View>

              {/* Full Name Input */}
              <Text style={styles.inputLabel}>
                Full Name <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Enter your full name"
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                />
              </View>

              {/* Professional Status Dropdown */}
              <Text style={styles.inputLabel}>
                Professional Status <Text style={{ color: "red" }}>*</Text>
              </Text>

              <TouchableOpacity
                style={styles.dropdownBox}
                onPress={() => setStatusOpen(!statusOpen)}
              >
                <Text style={styles.dropdownText}>
                  {status ? status : "Select your type"}
                </Text>
                <Ionicons
                  name={statusOpen ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#6B7280"
                />
              </TouchableOpacity>

              {statusOpen && (
                <View style={styles.dropdownList}>
                  {statusOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setStatus(option);
                        setStatusOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {/* About Input */}
              <Text style={styles.inputLabel}>
                Bio <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.textAreaBox}>
                <TextInput
                  placeholder="Tell us about yourself…"
                  placeholderTextColor="#9CA3AF"
                  style={styles.textArea}
                  multiline
                  maxLength={50}
                  value={about}
                  onChangeText={setAbout}
                />
              </View>

              <Text style={styles.charCount}>{about.length} / 50 characters</Text>

              {/* Bottom Sign in Link */}
              <TouchableOpacity
                onPress={() => router.push("/signin")}
                style={{ marginTop: 20, marginBottom: 10 }}
              >
                <Text style={styles.bottomText}>
                  Already have an account? <Text style={styles.bottomLink}>Sign in</Text>
                </Text>
              </TouchableOpacity>

              {/* Progress Bar */}
              <Text style={styles.stepText}>Step 1 of 4</Text>

              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>

              <Text style={styles.progressPercent}>25%</Text>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563EB",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#2563EB",
  },

  backBtn: {
    marginTop: -10,
    padding: 10,
  },

  headerTitle: {
    marginTop: 20,
    marginLeft: -60,
    color: "white",
    fontSize: 28,
    fontFamily: "OpenSans_700Bold",
  },

  nextBtn: {
    backgroundColor: "#A8DED2",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0F172A",
  },

  nextBtnText: {
    color: "#0F172A",
    fontFamily: "OpenSans_700Bold",
    fontSize: 15,
  },

  /* ---- WHITE WRAPPER (full-screen white area) ---- */
  whiteWrapper: {
    flex: 1,
    backgroundColor: "#F8FBFC",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop:60,
    overflow: "hidden",      // <<< critical: clips scroll content so you don't see blue behind rounded edge
    paddingBottom: 40,
    minHeight:"100%",
  },

  card: {
    paddingHorizontal: 25,
    paddingBottom: 60,
    paddingTop: 10,
  },

  sectionSubtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 10,
    marginBottom: 25,
    fontFamily: "OpenSans_400Regular",
  },

  /* Profile Picture */
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  profileCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  uploadBtn: {
    backgroundColor: "#A8DED2",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0F172A",
  },

  uploadBtnText: {
    color: "#0F172A",
    fontFamily: "OpenSans_600SemiBold",
  },

  /* Inputs */
  inputLabel: {
    fontSize: 15,
    color: "#0F172A",
    fontFamily: "OpenSans_700Bold",
    marginBottom: 6,
  },

  inputBox: {
    backgroundColor: "white",
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 12,
  },

  input: {
    fontFamily: "OpenSans_400Regular",
    color: "#0F172A",
  },

  /* Dropdown */
  dropdownBox: {
    backgroundColor: "white",
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    marginBottom: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdownText: {
    fontFamily: "OpenSans_400Regular",
    color: "#6B7280",
  },

  dropdownList: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    marginBottom: 20,
  },

  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  dropdownItemText: {
    fontFamily: "OpenSans_400Regular",
    color: "#0F172A",
  },

  /* About */
  textAreaBox: {
    backgroundColor: "white",
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    padding: 12,
  },

  textArea: {
    fontFamily: "OpenSans_400Regular",
    color: "#0F172A",
    textAlignVertical: "top",
  },

  charCount: {
    color: "#6B7280",
    marginTop: 4,
    fontFamily: "OpenSans_400Regular",
  },

  /* Bottom text */
  bottomText: {
    textAlign: "center",
    color: "#4B5563",
    fontFamily: "OpenSans_400Regular",
  },

  bottomLink: {
    color: "#2563EB",
    fontFamily: "OpenSans_600SemiBold",
  },

  /* Progress bar */
  stepText: {
    fontFamily: "OpenSans_600SemiBold",
    color: "#2563EB",
    marginTop: 10,
  },

  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 5,
  },

  progressFill: {
    width: "25%",
    height: "100%",
    backgroundColor: "#2563EB",
  },

  progressPercent: {
    textAlign: "right",
    fontFamily: "OpenSans_600SemiBold",
    color: "#2563EB",
    marginTop: 5,
    marginBottom: 150,
  },
});
