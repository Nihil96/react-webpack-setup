module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
  },
}
