/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                accents: {
                    blue: '#4EA8DE',
                    blue2: '#1E6F9F',
                    purple: '#8284FA',
                    black: '#0D0D0D',
                    dark: '#1A1A1A',
                    light: '#262626',
                    dgray: '#333333',
                    gray: '#F2F2F2',
                    dgray2: '#D9D9D9',
                    disabled: '#808080',
                },
                task: {
                    red: '#FF3B30',
                    orange: '#FF9500',
                    yellow: '#FFCC00',
                    green: '#34C759',
                    blue: '#007AFF',
                    indigo: '#5856D6',
                    purple: '#AF52DE',
                    pink: '#FF2D55', 
                    brown: '#A2845E',
                    
                }
            }
        },
    },
    safelist: [
        {
            pattern: /bg-task-/,
        },
    ],
    plugins: [],
}
