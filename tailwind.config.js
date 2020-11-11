const minMax = {
  min: 'min-content',
  max: 'max-content'
}
module.exports = {
  purge: false,
  theme: {
    zIndex: ["page", "nav", "dropdown", "modal", "onboarding"].reduce((obj, level, index) => {
      obj[`${level}-behind`] = (10 * index) - 1;
      obj[`${level}`] = 10 * index;
      obj[`${level}-front`] = (10 * index) + 1;
      return obj
    }, {}),
    extend: {
      inset: {
        '1/2': '50%',
      },
      width: minMax,
      height: minMax,
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
      }
    }
  },
  variants: {
    textColor: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus', 'active', 'disabled'],
    boxShadow: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus', 'active', 'disabled']
  },
  plugins: [],
  important: true
}
