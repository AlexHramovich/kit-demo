/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@shared/ui$",
    "",
    "^types$",
    "^@/env(.*)$",
    "^@/types/(.*)$",
    "^@/config$",
    "^@/config/(.*)$",
    "^@/constants/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/(.*)$",
    "^@/features/(.*)$",
    "^@/assets/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  // importOrderSeparation: false,
  // importOrderSortSpecifiers: true,
  // importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  // importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./packages/ui/tailwind.config.ts",
};
