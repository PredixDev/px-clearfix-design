# Clearfix

The Predix Experience Clearfix module is a minimal clearfix helper class. This module is a fork of the [inuitcss 
Clearfix module](https://github.com/inuitcss/trumps.clearfix).

## Dependency

Px's Clearfix module depends on one other Px module:

* [px-functions-design](https://github.sw.ge.com/PXd/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/PXd/px-clearfix-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-clearfix-design/trumps.clearfix";

See [px-getting-started](https://github.sw.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('trumps.clearfix') { ... }

#Usage

`@extend` the clearfix class with Sass to avoid the `clearfix` class appearing over and over in your markup.
