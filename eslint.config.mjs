import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "**/.next/**",
      ".npm-cache/**",
      "**/.npm-cache/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "payload-types.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
