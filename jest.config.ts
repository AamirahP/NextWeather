import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  ...createJestConfig,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  reporters: [
    'default',
    ['jest-json-reporter', { outputPath: 'test-results/test-report.json' }]
  ],
};

export default config;
