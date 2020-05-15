module.exports = {
  preset: "ts-jest",
  globalSetup: "./setup.js",
  globalTeardown: "./teardown.js",
  testEnvironment: "./puppeteer_environment.js",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
