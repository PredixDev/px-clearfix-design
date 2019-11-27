/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-clearfix-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-clearfix-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-clearfix-design" description="The clearfix module provides a minimal clearfix helper class to help clear floats." layer="trumps" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-functions-design&quot;
  ]" hide-demo-container="" selected-options="{{selectedOptions}}">

<!-- 2: Describe Usage -->
<section slot="usage">
You'll use this module to add the \`clearfix\` rules to other classes in your Sass.

Avoid using the \`.clearfix\` class directly in your markup. Instead, try to \`@extend\` the clearfix module inside the parent class that will wrap around floated elements. For example:

\`\`\`css
.row {
  @extend %clearfix;
  ...
}
\`\`\`
</section>
</px-sass-doc>
`,

  is: 'px-clearfix-design-demo'
});
