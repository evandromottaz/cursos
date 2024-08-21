import globals from 'globals'
import js from '@eslint/js'

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    js.configs.recommended,
]
