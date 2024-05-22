module.exports = {
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "component", "fix", "format", "style", "refactor"],
    ],
    "type-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "header-max-length": [2, "never", 72],
  },
};
