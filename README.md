# spinner-widget #

A simple, lightweight spinner [Polymer](https://www.polymer-project.org/) web component
without any other dependencies.

> Polymer 1.2 ready


## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install LostInBrittany/spinner-widget --save
```


## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/ace-widget/ace-widget.html">
    ```

3. Start using it!

    ```html
    <spinner-widget>Editable code here</spinner-widget>
    ```

## Attributes

Attribute       | Options   | Default | Description
---             | ---       | ---     | ---
`show`          | *Boolean* | false   | When true, the spinner is shown
`spinner-width` | *String*  | `500px` | The width of the spinner
`spinner-height`| *String*  | `500px` | The height of the spinner



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
