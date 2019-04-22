/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// Define the class for a new element called custom-element
import {PolymerElement, html} from 'https://unpkg.com/@polymer/polymer@3.0.0-pre.13/polymer-element.js';

class HelloElement extends PolymerElement {
  
static get template() { return html`
    <style>
      /* Local DOM CSS style */
    </style>
    <!-- Local DOM -->
    Hello {{name}}!    
`; }
  
static get is() { 'hello-element'; }
static get properties() {
   return {
      name: {
        type: String
       }
      /* Element properties */
   }
}
constructor() {
  super();
}
/* Custom methods */
}
window.customElements.define('hello-element', HelloElement);