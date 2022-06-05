import { extendTheme } from "@chakra-ui/react";
import styles from "@/theme/styles";
import { tokens as semanticTokens } from "@/theme/tokens";
import { darkMode as config } from "@/theme/darkMode";

const overrides = {
  config,
  styles,
  semanticTokens,
};
export default extendTheme(overrides);
