# granite-spinner #

A simple, lightweight spinner [Polymer](https://www.polymer-project.org/) web component
without any other dependencies.

> Polymer 1.3 ready


## Doc & demo

[https://lostinbrittany.github.io/granite-spinner](https://lostinbrittany.github.io/granite-spinner)


## Usage example

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="granite-spinner.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<granite-spinner
    color="#ff4081" 
    line-width="2em" 
    active></granite-spinner>
```


## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install LostInBrittany/granite-spinner --save
```


## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/granite-spinner/granite-spinner.html">
    ```

3. Start using it!

    ```html
    <granite-spinner></granite-spinner>
    ```

## Attributes

Attribute           | Options   | Default   | Description
---                 | ---       | ---       | ---
`active`            | *Boolean* | false     | When true, the spinner is shown
`hover`             | *Boolean* | false     | When true, the spinner hovers over the underlaying content
`size`              | *Number*  | `100px`   | The size of the spinner
`color`             | *String*  | `#28b6d8` | The color of the moving part of the spinner
`line-width`        | *String*  | `1.5em`   | The spinning element line width
`container-height`  | *Number*  | `150px`   | The size of the spinner container 


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
