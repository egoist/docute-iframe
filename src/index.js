function random() {
  return Math.random().toString().slice(2, 10)
}

function defaultParseContent(lang, content) {
  if (lang === 'js' || lang === 'javascript') {
    return `<script>${content}</script>`
  }
  return content
}

export default function ({
  sandbox = 'allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts',
  prepend = '',
  append = '',
  match = /^`{4}(.*?)\n([\s\S]*?)\n`{4}/gm,
  showSourceCode = true,
  surfaceAPI = ['Prism', 'fetch'],
  parseContent = defaultParseContent
} = {}) {
  return ({ beforeParse, event }) => {
    const stack = []

    beforeParse(raw => {
      return raw.replace(match, (_, p1, p2) => {
        let result = ''

        if (showSourceCode) {
          result += `\n\n\`\`\`${p1}\n${p2}\n\`\`\`\n\n`
        }

        const hash = random()
        const id = `holder-${hash}`
        result += `<div id="${id}"></div>`

        stack.push({
          id,
          hash,
          content: prepend + parseContent(p1, p2) + append
        })

        return result
      })
    })

    event.on('content:updated', () => {
      while (stack.length) {
        const node = stack.shift()
        const holder = document.getElementById(node.id)
        if (!holder) continue

        const iframe = document.createElement('iframe')
        iframe.src = 'about:self'
        iframe.className = 'code-iframe'
        iframe.frameBorder = 0
        iframe.width = '100%'
        iframe.sandbox = sandbox
        iframe.style = 'border:1px solid #eee'
        iframe.id = `iframe-${node.hash}`

        holder.parentNode.replaceChild(iframe, holder)
        // surface some API inside the iframe
        for (const name of surfaceAPI) {
          iframe.contentWindow[name] = window[name]
        }

        const doc = iframe.contentWindow.document
        doc.open().write(node.content)
        doc.close()
      }
    })
  }
}
