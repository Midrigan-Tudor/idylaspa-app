export default {
    tabWidth: 2,
    trailingComma: "es5",
    //plugins: ["@ianvs/prettier-plugin-sort-imports"],

    // Use empty strings to separate groups with empty lines
    importOrder: [
      "<BUILTIN_MODULES>",
      "^react$",
      "^react-dom/(.*)$",
      "^@airportlabs/(.*)$",
      "<THIRD_PARTY_MODULES>",
      "",
      "^~/(.*)$",
      "^[./]",
      "",
      "<TYPES>^react",
      "<TYPES>^react-dom",
      "<TYPES>^@airportlabs",
      "<TYPES>",
      "<TYPES>^[.]",
    ],

    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  };
