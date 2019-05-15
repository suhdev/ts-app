module.exports = {
    preset: 'ts-jest',
    setTimeout: 30000,
    testEnvironment: 'node',
    "collectCoverageFrom": [
      "**/*.{ts,tsx}",
      "!**/node_modules/**",
      "!**/lib/**",
      "!**/vendor/**"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -20
      }
    }
  };