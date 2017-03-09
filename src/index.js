export default function ({
  sandbox = 'allow-scripts allow-same-origin',
  prepend = '',
  append = '',
  match = /^`{4}(.*?)\n([\s\S]*?)\n`{4}/gm,
  showSourceCode = true
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
      return raw.replace(match, (_, p1, p2) => {
        let result = ''

        if (showSourceCode) {
          result += `\n\n\`\`\`${p1}\n${p2}\n\`\`\`\n\n`
        }

        result += `<iframe class="code-iframe" frameborder="0" style="border:1px solid #eee" sandbox="${sandbox}" srcdoc="${escapeHtml(prepend)}${escapeHtml(p2)}${escapeHtml(append)}"></iframe>`

        return result
      })
    })
  }
}
