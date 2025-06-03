import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const theme = {
  dark: false,
  colors: {
    background: '#FFFDF6',
    surface: '#FFFDF6',
    primary: '#5c34e9',
    secondary: '#8567ef',
    error: '#ff627d',
    info: '#00bafe',
    success: '#00d390',
    warning: '#fcb700',
  }
}


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme,
    },
  },
})

export default vuetify