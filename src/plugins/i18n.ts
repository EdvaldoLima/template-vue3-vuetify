import i18next from 'i18next';
import en from '@/locales/en.json'

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {},
});

// globals translation
i18next.addResourceBundle('en', 'global', en);

export default i18next
