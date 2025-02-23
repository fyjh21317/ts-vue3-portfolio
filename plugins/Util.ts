import applyMediumZoom from './Utils/applyMediumZoom'

// export default defineNuxtPlugin(nuxtApp => {
//   nuxtApp.provide('applyMediumZoom', applyMediumZoom)
// })

export default defineNuxtPlugin(() => {
  return {
    provide: {
      applyMediumZoom,
    },
  };
});