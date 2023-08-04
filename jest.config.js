const config = {
    collectCoverage: true,
    coverageDirectory: "./coverage",
    coveragePathIgnorePatterns: ["/node_modules/", "/coverage/", "./jest.config.js"],
    coverageThreshold: {
        branches: 100,
        functions: 100,
        lines: 100
    },
    collectCoverageFrom: [
        '**/*.{js,jsx}',
    ]
};

module.exports = config;