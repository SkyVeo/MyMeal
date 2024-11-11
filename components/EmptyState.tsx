import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";

import { colors } from "@/constants/colors";
import { images } from "@/constants/images";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

export default function EmptyState({ title, subtitle }: EmptyStateProps) {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
      <Image
        source={images.empty}
        resizeMode="contain"
        style={styles.image}
      />
        
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    paddingBottom: 24,
  },
  image: {
    width: 200,
    height: 200,
  },
  subtitle: {
    fontFamily: "Poppins-Medium",
    color: colors.dark.secondaryText,
    fontSize: 14,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: colors.dark.text,
    fontSize: 20,
  },
});
