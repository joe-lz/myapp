module.exports = {
    extends: "airbnb",
    plugins: ['jest', 'react', 'react-native'],
    parser: 'babel-eslint',
    env: {
        'jest/globals': true
    },
    rules: {
        'max-len': 'off',
        'no-use-before-define': ['error', { 'variables': false }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/prefer-stateless-function': 'off',
        'global-require': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'import/no-unresolved': 'off',
        'react/destructuring-assignment': 'off',
    }
};