/*
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [['module:react-native-dotenv']],
};
*/
module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        'expo-router/babel',
        ['module:react-native-dotenv'],
    ],
};
