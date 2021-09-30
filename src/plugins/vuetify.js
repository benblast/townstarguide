import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.purple,
                secondary: colors.indigo,
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
