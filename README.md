# docute-code-iframe

[![NPM version](https://img.shields.io/npm/v/docute-code-iframe.svg?style=flat)](https://npmjs.com/package/docute-code-iframe) [![NPM downloads](https://img.shields.io/npm/dm/docute-code-iframe.svg?style=flat)](https://npmjs.com/package/docute-code-iframe) [![Build Status](https://img.shields.io/circleci/project/egoist/docute-code-iframe/master.svg?style=flat)](https://circleci.com/gh/egoist/docute-code-iframe) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

A docute plugin to run code in docs with an iframe.

## Usage

*This plugin requires docute^2.9.0*

Include the scripts before your config file:

```html
<script src="https://unpkg.com/docute-iframe"><script>
```

Then in your config file:

```js
self.$config = {
  plugins: [
    docuteIframe()
  ]
}
```

Finally, you can write some fancy code examples which are `runnable`:

    This is a **markdown** file, here it to demonstrate some code:

    ````html
    <div id="example"></div>
    <script>
      document.getElementByid('example').innerHTML = '<strong>it works</strong>'
    </script>
    ````

**Note:** It's similar to gfm code blocks, which use triple backticks, but here you need to use **4 backticks** to mark it as runnable code while still have syntax highlight in your editor.

## API

### docuteIframe([options])

#### options

##### match

Type: `RegExp`<br>
Default: <code>/^\`{4}.*?\n([\s\S]*?)\n\`{4}/gm</code>

The regular express we use to find runnable code.

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
Default: `allow-scripts allow-same-origin`

The `sandbox` attribute of `iframe` element.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**docute-code-iframe** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/docute-code-iframe/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
