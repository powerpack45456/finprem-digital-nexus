
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// FinPrem custom colors
				finprem: {
					navy: '#0A192F',
					teal: '#00B8D4',
					light: '#F4F7FA',
					dark: '#1C1C1C'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'lato': ['Lato', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				// Precision - Laser Reveal Animation
				'laser-reveal': {
					'0%': {
						opacity: '0',
						clipPath: 'inset(0 100% 0 0)'
					},
					'100%': {
						opacity: '1',
						clipPath: 'inset(0 0% 0 0)'
					}
				},
				// Insight - Light Burst Animation
				'light-burst': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(10px)',
						filter: 'brightness(0.5)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05) translateY(-5px)',
						filter: 'brightness(1.3)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)',
						filter: 'brightness(1)'
					}
				},
				// Integrity - Stone Slide Animation
				'stone-slide': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px) scale(0.9)'
					},
					'70%': {
						opacity: '0.8',
						transform: 'translateY(-5px) scale(1.02)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				// Final settle animation
				'final-settle': {
					'0%': {
						transform: 'translateY(0) scale(1)'
					},
					'50%': {
						transform: 'translateY(-3px) scale(1.01)'
					},
					'100%': {
						transform: 'translateY(0) scale(1)'
					}
				},
				'page-turn': {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'50%': {
						transform: 'rotateY(-90deg)'
					},
					'100%': {
						transform: 'rotateY(-180deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'laser-reveal': 'laser-reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'light-burst': 'light-burst 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
				'stone-slide': 'stone-slide 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'final-settle': 'final-settle 0.5s ease-out forwards',
				'page-turn': 'page-turn 0.6s ease-in-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
