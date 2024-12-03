import { Text, StyleSheet, StyleProp, TextStyle, TextProps } from "react-native";
import { useHighlightText } from "./HighlightText.hooks";

export interface HighlightTextProps extends TextProps {
  textStyle?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
  text?: string;
  searchWords?: string[];
  ignoreTextSpaces?: boolean;
  caseSensitive?: boolean;
}

const HighlightText = ({
  textStyle,
  highlightStyle,
  text = "",
  searchWords = [],
  ignoreTextSpaces = false,
  caseSensitive = false,
  ...props
}: HighlightTextProps) => {
  const { textSegments, highlightRegex } = useHighlightText(text, searchWords, ignoreTextSpaces, caseSensitive);

  const getTextStyle = (segment: string) =>
    highlightRegex && highlightRegex.test(segment) ? [styles.highlight, highlightStyle] : undefined;

  return (
    <Text style={textStyle} {...props}>
      {textSegments.map((segment: string, index: number) => (
        <Text key={index} style={getTextStyle(segment)}>
          {segment}
        </Text>
      ))}
    </Text>
  );
};

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: "rgba(255, 145, 107, 0.7)",
    borderRadius: 4,
  },
});

export default HighlightText;
