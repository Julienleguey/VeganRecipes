module.exports = {
  root: true,
  extends: "@react-native-community",
  plugins: ["react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "react-native/react-native": true,
  },
  rules: {
    quotes: "off",
    "prettier/prettier": "off",
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "react-native/no-raw-text": "warn",
    "react-native/no-single-element-style-arrays": "warn",
  },
};
