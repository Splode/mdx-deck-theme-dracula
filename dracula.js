const colors = {
  background: '#21222C',
  cyan: '#8be9fd',
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
    root: {
      lineHeight: '1.5'
    },
    blockquote: {
      color: colors.cyan,
      fontSize: '3rem',
      fontStyle: 'italic'
    },
    h1: { color: colors.purple },
    h2: { color: colors.green },
    pre: {
      backgroundColor: colors.selection,
      borderRadius: '4px',
      color: colors.foreground,
      padding: '1em'
    },
    Slide: {
      padding: '2em'
    },
    Split: { textAlign: 'left' }
  }
}
