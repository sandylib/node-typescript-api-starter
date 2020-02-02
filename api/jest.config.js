module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    coverageThreshold: {
        global: {
            statements: 50
        }
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    testEnvironment: "node"
};