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

export default function FreelancerSignupForm3() {
  const router = useRouter();

  const [description, setDescription] = useState<string>("");

  const [primarySkill, setPrimarySkill] = useState<string>("");
  const [primarySkills, setPrimarySkills] = useState<string[]>([]);

  const [subSkill, setSubSkill] = useState<string>("");
  const [subSkills, setSubSkills] = useState<string[]>([]);

  const [expOpen, setExpOpen] = useState(false);
  const [experience, setExperience] = useState<string>("");

  const experienceOptions = ["Beginner", "Intermediate", "Expert", "Specialist"];

  const addPrimarySkill = () => {
    const cleaned = primarySkill.trim();
    if (cleaned && !primarySkills.includes(cleaned)) {
      setPrimarySkills([...primarySkills, cleaned]);
      setPrimarySkill("");
    }
  };

  const removePrimary = (skill: string) => {
    setPrimarySkills(primarySkills.filter((s) => s !== skill));
  };

  const addSubSkill = () => {
    const cleaned = subSkill.trim();
    if (cleaned && !subSkills.includes(cleaned)) {
      setSubSkills([...subSkills, cleaned]);
      setSubSkill("");
    }
  };

  const removeSub = (skill: string) => {
    setSubSkills(subSkills.filter((s) => s !== skill));
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
            onPress={() => router.push("/freelancerSignupForm4")}
          >
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* WHITE WRAPPER */}
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

              <Text style={styles.sectionSubtitle}>Showcase your expertise</Text>

              <Text style={styles.sectionTitle}>Skills and Experience</Text>

              {/* Professional Description */}
              <Text style={styles.inputLabel}>
                Professional Description <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.textAreaBox}>
                <TextInput
                  placeholder="Tell us about your company..."
                  placeholderTextColor="#7A8C99"
                  style={styles.textArea}
                  multiline
                  maxLength={100}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>

              <Text style={styles.charCount}>{description.length} / 100 minimum characters</Text>

              {/* Primary Skills */}
              <Text style={styles.inputLabel}>
                Primary Skills <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.row}>
                <TextInput
                  placeholder="for e.g. Graphic Design, Web development etc."
                  placeholderTextColor="#7A8C99"
                  style={styles.skillInput}
                  value={primarySkill}
                  onChangeText={setPrimarySkill}
                />
                <TouchableOpacity style={styles.addBtn} onPress={addPrimarySkill}>
                  <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tagsContainer}>
                {primarySkills.map((skill, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{skill}</Text>
                    <TouchableOpacity onPress={() => removePrimary(skill)}>
                      <Ionicons name="close" size={14} color="#0F172A" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Sub Skills */}
              <Text style={styles.inputLabel}>
                Sub Skills <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.row}>
                <TextInput
                  placeholder="for e.g. Communications skills, Team work etc."
                  placeholderTextColor="#7A8C99"
                  style={styles.skillInput}
                  value={subSkill}
                  onChangeText={setSubSkill}
                />
                <TouchableOpacity style={styles.addBtn} onPress={addSubSkill}>
                  <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tagsContainer}>
                {subSkills.map((skill, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{skill}</Text>
                    <TouchableOpacity onPress={() => removeSub(skill)}>
                      <Ionicons name="close" size={14} color="#0F172A" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Levels of Experience */}
              <Text style={styles.inputLabel}>
                Levels of Experience <Text style={{ color: "red" }}>*</Text>
              </Text>

              <TouchableOpacity
                onPress={() => setExpOpen(!expOpen)}
                style={styles.dropdownBox}
              >
                <Text style={styles.dropdownText}>
                  {experience || "Select your experience level"}
                </Text>

                <Ionicons
                  name={expOpen ? "chevron-up" : "chevron-down"}
                  size={22}
                  color="#6B7280"
                />
              </TouchableOpacity>

              {expOpen && (
                <View style={styles.dropdownList}>
                  {experienceOptions.map((opt, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setExperience(opt);
                        setExpOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{opt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {/* Years of Experience */}
              <Text style={styles.inputLabel}>
                Years of Experience <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder="2.5"
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>

              {/* Hourly Rate */}
              <Text style={styles.inputLabel}>
                Base Hourly Rate (PKR) <Text style={{ color: "red" }}>*</Text>
              </Text>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder="for e.g. 2000"
                  placeholderTextColor="#7A8C99"
                  keyboardType="numeric"
                  style={styles.input}
                />
              </View>

              {/* LinkedIn */}
              <Text style={styles.inputLabel}>LinkedIn Profile (Optional)</Text>

              <View style={styles.inputBox}>
                <TextInput
                  placeholder="https://linkedin.com/in/yourprofile"
                  placeholderTextColor="#7A8C99"
                  style={styles.input}
                />
              </View>

              {/* Sign In */}
              <TouchableOpacity
                onPress={() => router.push("/signin")}
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                <Text style={styles.bottomText}>
                  Already have an account? <Text style={styles.bottomLink}>Sign in</Text>
                </Text>
              </TouchableOpacity>

              {/* Progress Bar */}
              <Text style={styles.stepText}>Step 3 of 4</Text>

              <View style={styles.progressBar}>
                <View style={styles.progressFill75} />
              </View>

              <Text style={styles.progressPercent}>75%</Text>

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
    marginTop:10,
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

  textAreaBox: {
    backgroundColor: "white",
    height: 130,
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
    marginBottom: 10,
    fontFamily: "OpenSans_400Regular",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  skillInput: {
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
    marginBottom: 10,
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

  bottomText: {
    textAlign: "center",
    color: "#4B5563",
  },

  bottomLink: {
    color: "#2563EB",
  },

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

  progressFill75: {
    width: "75%",
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
