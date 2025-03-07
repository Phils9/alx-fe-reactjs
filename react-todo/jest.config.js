export default {
  testEnvironment: 'jsdom', // Use jsdom as the test environment
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform JSX and ES6+ syntax
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
  },
};