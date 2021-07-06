module.exports = {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/**/index.{js,jsx,ts,tsx}',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  clearMocks: true,
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
};
