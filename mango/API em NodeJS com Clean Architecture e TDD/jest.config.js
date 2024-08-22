/**
/** @type {import('jest').Config} */
export default {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    transformIgnorePatterns: ['/node_modules/', '/eslint.config.mjs/'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
}
