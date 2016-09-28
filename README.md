# px-clearfix-design

The clearfix module provides a minimal clearfix helper class to help clear floats. This module is a fork of the [inuitcss clearfix module](https://github.com/inuitcss/trumps.clearfix).

## Installation

Install the module and any dependencies using Bower. Run this task from the command line inside your project folder:

    bower install --save px-clearfix-design

## Enable and Import

### Enable Flags

There are no flags to set before importing this module in your project Sass file.

### Import Sass

Import the module by placing this code into the `Trumps` layer of your project Sass file:

     @import "px-clearfix-design/_trumps.clearfix.scss";

The module is wrapped the following `@if` statement, and will only be included once when your Sass is compiled into CSS.

    @if import-once('trumps.clearfix') { ... }

## Usage

Avoid using the `.clearfix` class directly in your markup. Instead, try to `@extend` the clearfix module inside the parent class that will wrap around floated elements. For example:

    .row {
      @extend %clearfix;
      ...
    }

## Dependencies

This module depends on the following Predix UI CSS modules:

* [px-functions-design](https://github.com/PredixDev/px-functions-design)
