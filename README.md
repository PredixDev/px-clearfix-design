# Clearfix

The Predix UI Clearfix module is a minimal clearfix helper class. This module is a fork of the [inuitcss
Clearfix module](https://github.com/inuitcss/trumps.clearfix).

## Dependency

Predix UI's Clearfix module depends on one other Px module:

* [px-functions-design](https://github.com/PredixDev/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-clearfix-design

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-clearfix-design/trumps.clearfix";

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('trumps.clearfix') { ... }

#Usage

`@extend` the clearfix class with Sass to avoid the `clearfix` class appearing over and over in your markup.
