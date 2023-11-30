const { create } = require('domain')
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Providing the path to Next.js app to load next.config.js and .env files in test env
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper : {
        // Handle the module aliases
        '^@/components/(.*)$' : '<rootDir>/components/$1',

        '^@/pages/(.*)$' : '<rootDir>/pages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
}

// Export the created config
module.exports = createJestConfig(customJestConfig);