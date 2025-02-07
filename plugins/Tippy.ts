import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy, {
    defaultProps: {
      animation: "discord-anim",
      duration: [100, 100],
      hideOnClick: false,
      directive: "tippy",
      theme: "discord",
      inertia: true,
      arrow: true,
    },
  })
})
