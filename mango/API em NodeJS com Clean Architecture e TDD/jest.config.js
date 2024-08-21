/**
/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    transformIgnorePatterns: ['/node_modules/', '/eslint.config.mjs/'],
}

module.exports = config
