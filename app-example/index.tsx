import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/colors";
import { images } from "@/constants/images";

export default function Index() {
  return (
    // <SafeAreaView style={{ backgroundColor: colors.dark.background, height: "100%" }}>
    //   <TouchableOpacity onPress={() => router.push("/meal")}>
    //     <ScrollView contentContainerStyle={{ height: "100%" }}>
    //       <View style={styles.container}>
    //         <Image source={images.logo} style={styles.logo} resizeMode="contain" />
    //       </View>
    //     </ScrollView>
    //   </TouchableOpacity>

    //   <StatusBar backgroundColor={colors.dark.background} style="light" />
    // </SafeAreaView>
    <View style={{ backgroundColor: colors.dark.background, flex: 1 }}>
      <TouchableOpacity onPress={() => router.push("/meal")}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View style={styles.container}>
            <Image source={images.logo} style={styles.logo} resizeMode="contain" />
          </View>
        </ScrollView>
      </TouchableOpacity>

      <StatusBar backgroundColor={colors.dark.background} style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  logo: {
    width: 300,
    height: 300,
  },
});
