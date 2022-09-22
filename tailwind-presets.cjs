const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': colors.indigo,
                'secondary': colors.gray,
                'warning': colors.orange,
                'danger': colors.red,
            },
        },
    },
}
