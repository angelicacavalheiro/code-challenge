export default {
    modulePathIgnorePatterns: ["<rootDir>/.*styled\\.jsx$"],
    transform: {
      "^.+\\.jsx$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@babel/preset-modules)" 
    ],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/__mock__/fileMock',
      '\\.(css|less)$': '<rootDir>/src/__mock__/styleMock',    
    },
    testEnvironment: 'jsdom',  
  };  
  