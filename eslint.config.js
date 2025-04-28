// eslint.config.js
import js from '@eslint/js';
import mocha from 'eslint-plugin-mocha';
import * as wdio from 'eslint-plugin-wdio';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import("eslint/config").FlatConfig[]} */
export default [
    // Lint the config file itself with Node globals
    {
        files: ['eslint.config.js'],
        languageOptions: {
            globals: {
                process: true,
                __dirname: true,
                module: true,
                require: true,
            },
        },
    },

    // Base JS rules
    js.configs.recommended,

    // TypeScript + Mocha + WebdriverIO rules
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
            },
            globals: {
                // Mocha test functions
                describe: true,
                it: true,
                before: true,
                after: true,
                beforeEach: true,
                afterEach: true,

                // WebdriverIO globals
                browser: true,
                $: true,
                $$: true,
                WebdriverIO: true,

                // Optional (if you use expect-webdriverio)
                expect: true,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            mocha,
            wdio,
        },
        rules: {
            // TypeScript rules
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',

            // Mocha rules
            'mocha/no-mocha-arrows': 'off',

            // WebdriverIO rules
            'wdio/no-pause': 'warn',
        },
    },

    {
        files: ['wdio.conf.ts'],
        languageOptions: {
            parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
            },
            globals: {
                process: true,
                WebdriverIO: true,
            },
        },
        rules: {
            // Allow unused vars if prefixed with `_`
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

            // Allow temporary any (or disable case-by-case via comments)
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },


    // Ignore unnecessary files
    {
        ignores: ['dist/', 'node_modules/'],
    },
];
