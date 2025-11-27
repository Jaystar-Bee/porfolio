export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      neutral: 'slate'
    },
    navigationMenu: {
      slots: {
      },
      active: {
        true: {
          childLink: 'before:bg-transparent text-highlighted font-medium'
        },
        false: {
          childLink: [
            'hover:before:bg-transparent'
          ]
        }
      }
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    }
  }
})
