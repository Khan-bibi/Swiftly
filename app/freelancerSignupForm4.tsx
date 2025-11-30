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

export default function FreelancerSignupForm4() {
  const router = useRouter();

  const [educationOpen, setEducationOpen] = useState(false);
  const [education, setEducation] = useState<string>("");

  const educationOptions = [
    "O-Levels",
    "A-Levels",
    "Matric",
    "Fsc",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Create Freelancer{"\n"}Account</Text>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => router.push("/accountSetup")}
          >
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* WHITE WRAPPER */}
        <View style={styles.whiteWrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 0}
            style={{ flex: 1 }}
          >
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.card}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >

              <Text style={styles.sectionSubtitle}>Complete your profile</Text>

              <Text style={styles.sectionTitle}>Education and Portfolio</Text>

              {/* EDUCATION LEVEL */}
              <Text style={styles.inputLabel}>
                Education Level <Text style={{ color: "red" }}>*</Text>
              </Text>

              <TouchableOpacity
                style={styles.dropdownBox}
                onPress={() => setEducationOpen(!educationOpen)}
              >
                <Text style={styles.dropdownText}>
                  {education || "Select your education level"}
                </Text>

                <Ionicons
                  name={educationOpen ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#6B7280"
                />
              </TouchableOpacity>

              {educationOpen && (
                <View style={styles.dropdownList}>
                  {educationOptions.map((opt, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setEducation(opt);
                        setEducationOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{opt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {/* TRANSCRIPT UPLOAD BOX */}
              <View style={styles.uploadBox}>
                <Ionicons name="cloud-upload-outline" size={40} color="#0F172A" />
                <Text style={styles.uploadText}>
                  Click to upload Transcript (Pdf or Image)
                </Text>
              </View>

              {/* PORTFOLIO LINKS */}
              <Text style={[styles.sectionTitle, { marginTop: 10 }]}>
                Portfolio Links
              </Text>

              {/* GITHUB */}
              <Text style={styles.inputLabel}>GitHub Profile</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="https://github.com/yourusername"
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                />
              </View>

              {/* PORTFOLIO WEBSITE */}
              <Text style={styles.inputLabel}>Portfolio Website</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="https://yourwebsitename.com"
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                />
              </View>

              {/* CERTIFICATIONS */}
              <Text style={styles.sectionTitle}>
                Certifications (Optional)
              </Text>

              <View style={styles.uploadBox}>
                <Ionicons name="cloud-upload-outline" size={40} color="#0F172A" />
                <Text style={styles.uploadText}>
                  Click to upload Certificates (Multiple files allowed)
                </Text>
              </View>

              {/* Sign in link */}
              <TouchableOpacity
                onPress={() => router.push("/signin")}
                style={{ marginTop: 20 }}
              >
                <Text style={styles.bottomText}>
                  Already have an account?{" "}
                  <Text style={styles.bottomLink}>Sign in</Text>
                </Text>
              </TouchableOpacity>

              {/* PROGRESS */}
              <Text style={styles.stepText}>Step 4 of 4</Text>

              <View style={styles.progressBar}>
                <View style={styles.progressFill100} />
              </View>

              <Text style={styles.progressPercent}>100%</Text>

            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

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
  },

  backBtn: {
    padding: 10,
  },

  headerTitle: {
    marginTop: 30,
    marginLeft: -10,
    color: "white",
    fontSize: 24,
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
  },

  whiteWrapper: {
    flex: 1,
    backgroundColor: "#F8FBFC",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 60,
    overflow: "hidden",
    paddingBottom: 40,
    minHeight: "100%",
  },

  card: {
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 80,
  },

  sectionSubtitle: {
    textAlign: "left",
    color: "#6B7280",
    marginBottom: 10,
    fontFamily: "OpenSans_400Regular",
  },

  sectionTitle: {
    fontSize: 16,
    color: "#0F172A",
    fontFamily: "OpenSans_700Bold",
    marginBottom: 15,
  },

  inputLabel: {
    fontSize: 15,
    color: "#0F172A",
    fontFamily: "OpenSans_700Bold",
    marginBottom: 6,
  },

  /* Input boxes */
  inputBox: {
    backgroundColor: "white",
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
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
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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

  /* Upload boxes */
  uploadBox: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#D1D5DB",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    backgroundColor: "#ffffff",
  },

  uploadText: {
    marginTop: 10,
    color: "#0F172A",
    fontFamily: "OpenSans_400Regular",
    textAlign: "center",
    fontSize: 14,
  },

  bottomText: {
    textAlign: "center",
    color: "#4B5563",
  },

  bottomLink: {
    color: "#2563EB",
  },

  /* Progress */
  stepText: {
    marginTop: 10,
    fontFamily: "OpenSans_600SemiBold",
    color: "#2563EB",
  },

  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginTop: 5,
    overflow: "hidden",
  },

  progressFill100: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2563EB",
  },

  progressPercent: {
    textAlign: "right",
    marginTop: 5,
    marginBottom: 150,
    fontFamily: "OpenSans_600SemiBold",
    color: "#2563EB",
  },
});
