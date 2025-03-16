// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // Your custom configs here
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/multi-word-component-names": "off",
  },
});
