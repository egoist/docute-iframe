export default function ({
  sandbox = 'allow-scripts allow-same-origin',
  prepend = '',
  append = '',
  match = /^`{4}.*?\n([\s\S]*?)\n`{4}/gm
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
    beforeParse(raw => {
      return raw.replace(match, (_, p1) => {
        return `<iframe style="border:none" sandbox="${sandbox}" srcdoc="${escapeHtml(prepend)}${escapeHtml(p1)}${escapeHtml(append)}"></iframe>`
      })
    })
  }
}
