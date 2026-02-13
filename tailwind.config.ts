import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                midnight: {
                    DEFAULT: '#0D0D1A',
                    light: '#1A1A2E',
                    surface: '#16213E',
                },
                neon: {
                    cyan: '#00FFFF',
                    fuchsia: '#FF00FF',
                    uv: '#7B2FBE',
                    green: '#00FF88',
                    amber: '#FFB800',
                    red: '#FF3366',
                },
                ghost: '#E0E0FF',
                muted: '#8888AA',
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.3)',
                'glow-fuchsia': '0 0 20px rgba(255, 0, 255, 0.3)',
                'glow-uv': '0 0 20px rgba(123, 47, 190, 0.3)',
            },
            backgroundImage: {
                'gradient-galaxy': 'linear-gradient(135deg, #0D0D1A, #1A1A2E, #16213E)',
                'gradient-neon': 'linear-gradient(135deg, #00FFFF, #FF00FF, #7B2FBE)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
