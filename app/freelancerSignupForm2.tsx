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

export default function FreelancerSignupForm2() {
  const router = useRouter();
  const [languages, setLanguages] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>("");

  const addLanguage = () => {
  const cleaned = language.trim();

  if (cleaned !== "" && !languages.includes(cleaned)) {
    setLanguages([...languages, cleaned]);
    setLanguage("");
  }
};

const removeLang = (lang: string) => {
  setLanguages(languages.filter(item => item !== lang));
};


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
            onPress={() => router.push("/freelancerSignupForm3")}
          >
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* WHITE ROUNDED WRAPPER */}
        <View style={styles.whiteWrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={{ flex: 1 }}
          >
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.card}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >

              <Text style={styles.sectionSubtitle}>How can clients reach you ?</Text>

              {/* CONTACT & INFO TITLE */}
              <Text style={styles.sectionTitle}>Contact and Info</Text>

              {/* PHONE */}
              <Text style={styles.inputLabel}>
                Phone Number <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="+92-XXX-XXXXXXX"
                  placeholderTextColor="#7A8C99"
                  keyboardType="phone-pad"
                  style={styles.input}
                />
              </View>

              {/* CNIC */}
              <Text style={styles.inputLabel}>
                CNIC <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="XXXXX-XXXXXXX-X"
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                />
              </View>

              {/* EMAIL */}
              <Text style={styles.inputLabel}>
                Email <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="example@domain.com"
                  placeholderTextColor="#7A8C99"
                  keyboardType="email-address"
                  style={styles.input}
                />
              </View>

              {/* CITY */}
              <Text style={styles.inputLabel}>
                City <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="for e.g. Karachi, Faisalabad etc."
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                />
              </View>

              {/* LANGUAGES */}
              <Text style={styles.inputLabel}>
                Languages Known <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.langRow}>
                <TextInput
                  placeholder="English"
                  placeholderTextColor="#7A8C99"
                  style={styles.langInput}
                  value={language}
                  onChangeText={setLanguage}
                />
                <TouchableOpacity style={styles.addBtn} onPress={addLanguage}>
                  <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
              </View>

              {/* Added Tags */}
              <View style={styles.tagsContainer}>
                {languages.map((lang, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{lang}</Text>
                    <TouchableOpacity onPress={() => removeLang(lang)}>
                      <Ionicons name="close" size={14} color="#0F172A" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Sign In Link */}
              <TouchableOpacity
                onPress={() => router.push("/signin")}
                style={{ marginTop: 20, marginBottom: 10 }}
              >
                <Text style={styles.bottomText}>
                  Already have an account? <Text style={styles.bottomLink}>Sign in</Text>
                </Text>
              </TouchableOpacity>

              {/* Progress Bar */}
              <Text style={styles.stepText}>Step 2 of 4</Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill50} />
              </View>
              <Text style={styles.progressPercent}>50%</Text>

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
    minHeight:"100%",
  },

  card: {
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 80,
  },

  sectionSubtitle: {
    marginTop: 10,
    textAlign: "left",
    color: "#6B7280",
    marginBottom: 20,
    fontFamily: "OpenSans_400Regular",
  },

  sectionTitle: {
    fontSize: 16,
    color: "#0F172A",
    fontFamily: "OpenSans_700Bold",
    marginBottom: 20,
  },

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

  /* Languages */
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  langInput: {
    flex: 1,
    height: 48,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontFamily: "OpenSans_400Regular",
  },

  addBtn: {
    marginLeft: 10,
    backgroundColor: "#A8DED2",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0F172A",
  },

  addBtnText: {
    color: "#0F172A",
    fontFamily: "OpenSans_700Bold",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  tagText: {
    marginRight: 6,
    color: "#0F172A",
    fontFamily: "OpenSans_600SemiBold",
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

  progressFill50: {
    width: "50%",
    height: "100%",
    backgroundColor: "#2563EB",
  },

  progressPercent: {
    textAlign: "right",
    marginTop: 5,
    fontFamily: "OpenSans_600SemiBold",
    color: "#2563EB",
    marginBottom: 150,
  },
});
