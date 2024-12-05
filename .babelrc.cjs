module.exports = {
  presets: [],
  plugins: [
    [
      "import",
      {
        libraryName: "@mui/material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "@mui/material",
    ],
    [
      "import",
      {
        libraryName: "@mui/icons-material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "@mui/icons-material",
    ],
  ],
};