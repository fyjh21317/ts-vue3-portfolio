import { annotate } from 'rough-notation';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      annotate,
    },
  };
});