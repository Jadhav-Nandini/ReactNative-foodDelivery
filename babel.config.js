// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };


// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:@react-native/babel-preset'],
//     plugins: [
//       'react-native-reanimated/plugin',
//       [
//         'module-resolver',
//         {
//           root: ['./src'],
//           alias: {
//             '@assets': './src/assets',
//             '@features': './src/features',
//             '@navigation': './src/navigation',
//             '@components': './src/components',
//             '@unistyles': './src/unistyles',
//             '@services': './src/services',
//             '@states': './src/states',
//             '@utils': './src/utils',
//           },
//         },
//       ],
//     ],
//   };
// };







module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@unistyles': './src/unistyles',
            '@services': './src/services',
            '@states': './src/states',
            '@utils': './src/utils',
          },
        },
      ],


      // ❗ MUST BE LAST (NEVER COMMENT THIS)
      'react-native-reanimated/plugin',
    ],
  };
};




// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:@react-native/babel-preset'],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           root: ['./src'],
//           alias: {
//             '@assets': './src/assets',
//             '@features': './src/features',
//             '@navigation': './src/navigation',
//             '@components': './src/components',
//             '@unistyles': './src/unistyles',
//             '@services': './src/services',
//             '@states': './src/states',
//             '@utils': './src/utils',
//           },
//         },
//       ],

//       // ✅ FIXED
//       [
//         'react-native-unistyles/plugin',
//         {
//           root: '.',
//         },
//       ],

//       // ❗ MUST be last
//       'react-native-reanimated/plugin',
//     ],
//   };
// };


