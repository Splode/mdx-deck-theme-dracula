const colors = {
  background: '#21222C',
  foreground: '#f8f8f2',
  green: '#50fa7b',
  purple: '#bd93f9',
  selection: '#282a36'
}

export default {
  googleFont: 'https://fonts.googleapis.com/css?family=Lato|Courier+Prime',
  fonts: {
    body: 'Lato, cursive',
    monospace: '"Courier Prime", monospace'
  },
  colors: {
    text: colors.foreground,
    background: colors.background,
    primary: colors.foreground
  },
  styles: {
    // root: {
    //   textAlign: 'left'
    // },
    h1: { color: colors.purple },
    h2: { color: colors.green },
    pre: {
      backgroundColor: colors.selection,
      borderRadius: '4px',
      color: colors.foreground,
      padding: '1em'
    },
    Slide: {
      // display: 'block',
      padding: '2em'
      // textAlign: 'left'
    },
    Split: { textAlign: 'left' }
  }
}
