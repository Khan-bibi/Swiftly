import { useRouter } from "expo-router";
import { 
  Dimensions, 
  Image, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ImageBackground 
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.screenContainer}>

      {/* 🌈 Top Background Image */}
      <ImageBackground
        source={require("../assets/images/backgroundimage.png")}
        style={styles.topBackground}
        resizeMode="cover"
      >

        {/* Illustration */}
        <Image
          source={require("../assets/images/onboarding1.png")}
          style={styles.illustration}
        />

        {/* Skip Button */}
        <TouchableOpacity 
          style={styles.skipButton} 
          onPress={() => router.replace("/welcome")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* 💜 Purple Arc */}
      <View style={styles.purpleArc} />

      {/* 🔵 Blue Bottom Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>
          Find Freelancing Gigs{"\n"}instantly and anytime.
        </Text>

        <Text style={styles.subtitle}>
          Swiftly connects you to verified clients who need your skills right now. 
          No long bids, just instant opportunities.
        </Text>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/onboarding2")}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* 🌈 Top Background behind illustration */
  topBackground: {
    width: "100%",
    height: 800,  // perfect height for your design
    alignItems: "center",
  },

  illustration: {
    width: width * 1,
    height: 300,
    marginTop: 165
  },

  /* Skip in top-right */
  skipButton: {
    position: "absolute",
    top: 45,
    right: 20,
    backgroundColor: "#7EC8B7",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    zIndex: 20,
    borderWidth: 1,
    borderColor: "#0F172A",
    marginTop: 60
  },

  skipText: {
    fontSize: 14,
    color: "#0F172A",
    fontWeight: "600",
  },

  /* 💜 Purple curved separator */
  purpleArc: {
    width: "100%",
    height: 65,
    backgroundColor: "#E08BFF",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    marginTop: -330,
    borderWidth: 1,
    borderColor: "#0F172A",
  },

  /* 🔵 Blue bottom card */
  bottomCard: {
    flex: 1,
    width: "100%",
    backgroundColor: "#2563EB",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingVertical: 30,
    paddingHorizontal: 27,
    marginTop: -48,
    borderWidth: 1,
    borderColor: "#0F172A",
  },

  title: {
    fontSize: 24,
    color: "#F1F5F9",
    textAlign: "center",
    fontFamily: "OpenSans_800ExtraBold_Italic",
    marginTop: -5,
  },

  subtitle: {
    fontSize: 14,
    color: "#D6E8E1",
    textAlign: "center",

    fontFamily: "OpenSans_400Regular",
    marginTop: 18
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#98AAB0",
    marginHorizontal: 4,
    marginTop: 35
  },

  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: "#FFFFFF",
  },

  nextButton: {
    backgroundColor: "#7EC8B7",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    width: "45%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#0F172A",
    marginTop: 40
  },

  nextText: {
    color: "#0F172A",
    fontSize: 18,
    fontFamily: "OpenSans_600SemiBold",
  },
});
