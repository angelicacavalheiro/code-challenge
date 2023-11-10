export const presets = [
  [
    "@babel/preset-env",
  ],
  [
    "@babel/preset-react", {"runtime": "automatic"}
  ]
];

export const plugins = ["@babel/plugin-syntax-dynamic-import"];

export const module ={
  rules: [
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ],
}