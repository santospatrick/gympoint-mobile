const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ['./src/'],
        },
    ],
];

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
};
