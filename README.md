# px-clearfix-design

The Predix UI Clearfix module provides a minimal clearfix helper class to help clear floats. This module is a fork of the [inuitcss clearfix module](https://github.com/inuitcss/trumps.clearfix).

## Dependencies

The `px-clearfix-design` module depends on the following Predix UI CSS modules:

* [px-functions-design](https://github.com/PredixDev/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-clearfix-design

Once installed, `@import` into your project's Sass file in its Trumps layer:

    @import 'px-clearfix-design/_trumps.clearfix.scss';

## Usage

You'll use this module to add the `clearfix` rules to other classes in your Sass.

Avoid using the `.clearfix` class directly in your markup. Instead, try to `@extend` the clearfix module inside the parent class that will wrap around floated elements. For example:

```
.row {
  @extend %clearfix;
  ...
}
```

Please view the full API [here](http://predixdev.github.io/px-clearfix-design/)
