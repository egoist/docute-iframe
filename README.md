# docute-iframe

[![NPM version](https://img.shields.io/npm/v/docute-iframe.svg?style=flat)](https://npmjs.com/package/docute-iframe) [![NPM downloads](https://img.shields.io/npm/dm/docute-iframe.svg?style=flat)](https://npmjs.com/package/docute-iframe) [![Build Status](https://img.shields.io/circleci/project/egoist/docute-iframe/master.svg?style=flat)](https://circleci.com/gh/egoist/docute-iframe) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

A docute plugin to run code in docs with an iframe.

## Usage

*This plugin requires docute^2.9.0*

Include the scripts before running `docute.init`:

```html
<script src="https://unpkg.com/docute-iframe"></script>
```

Then activate the plugin:

```js
docute.init({
  plugins: [
    docuteIframe()
  ]
})
```

Finally, you can write some fancy code examples which are `runnable`:

    This is a **markdown** file, here it to demonstrate some code:

    ````html
    <div id="example"></div>
    <script>
      document.getElementById('example').innerHTML = '<strong>it works</strong>'
    </script>
    ````

**Note:** It's similar to gfm code blocks, which use triple backticks, but here you need to use **4 backticks** to mark it as runnable code while still have syntax highlight in your editor.

If the `language` of code block is `js` or `javascript`, it will be automatically wrapped in `<script>` tag and inserted into iframe body, you can [customize it](#parsecontent) though.

## API

### docuteIframe([options])

#### options

##### match

Type: `RegExp`<br>
Default: <code>/^\`{4}(.\*?)\n([\s\S]\*?)\n\`{4}/gm</code>

The regular expression we use to find runnable code.

##### showSourceCode

Type: `boolean`<br>
Default: `true`

Show highlighted source code before iframe.

##### prepend

Type: `string`

Prepend string to iframe body, eg:

```js
docuteIframe({
  prepend: '<script src="https://unpkg.com/vue@2.2.2/dist/vue.min.js"></script>'
})
```

Then you can use `Vue` in your code.

##### append

Same as `prepend` but append to iframe body.

##### sandbox

Type: `string`<br>
Default: `allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts`

The `sandbox` attribute of `iframe` element.

##### surfaceAPI

Type: `Array`<br>
Default: `['Prism', 'fetch']`

Deliver some global variables of parent window to iframe, don't deliver variables that rely on `window.document`, since the parent window and iframe have different `document.`

##### parseContent

Type: `function`<br>
Default:

```js
function defaultParseContent(lang, content) {
  if (lang === 'js' || lang === 'javascript') {
    return `<script>${content}</script>`
  }
  return content
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**docute-iframe** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/docute-iframe/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
