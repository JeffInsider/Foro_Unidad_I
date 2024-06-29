module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-community|@testing-library/react-native)/)',
  ],
  //esto es para que jest pueda leer archivos ts, tsx, js, jsx, json, node
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^react-native$': 'react-native',
  },
  globals: {
    __DEV__: true,
  },
};



