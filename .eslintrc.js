module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"], //"plugin:prettier/recommended",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": [
            "warn",
            {
                singleQuote: false
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
