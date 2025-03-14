import {
  defineConfig, presetUno, presetAttributify,
  presetMini, presetWebFonts, transformerVariantGroup, presetTypography
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini({
      dark: 'class' // 預設即為 class
    }),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Noto Sans',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        inter: ['Inter', 'Inter:500,600'],
        dmSans: 'DM Sans',
        pop: 'Poppins',
        source: 'Source Sans Pro',
        work: 'Work Sans',
        roboto: 'Roboto',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
  },
  shortcuts: {
    "responsive-screen": "max-w-screen-lg mx-auto px-6 md:px-0",
    "focus-ring":
      "ring-offset-2 light:(ring-offset-gray-50 ring-gray-300) focus:outline-none focus:ring-1 dark:focus:(ring-offset-neutral-900 ring-neutral-800)",
    "card-base":
      "border-[0.1px] p-4 bg-opacity-25 bg-neutral-100 hover:bg-neutral-200/40 border-neutral-200 dark:(bg-neutral-800/30 border-neutral-800 text-white/80 hover:text-white hover:bg-opacity-40) transition-colors",
    "flex-c": "flex items-center justify-center",
  },
})