export default function ({
  sandbox = 'allow-scripts allow-same-origin',
  prepend = '',
  append = ''
} = {}) {
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  return ({ beforeParse }) => {
    const re = /^`{4}.*?\n([\s\S]*?)\n`{4}/gm

    beforeParse(raw => {
      return raw.replace(re, (_, p1) => {
        return `<iframe sandbox="${sandbox}" srcdoc="${escapeHtml(prepend)}${escapeHtml(p1)}${escapeHtml(append)}"></iframe>`
      })
    })
  }
}
