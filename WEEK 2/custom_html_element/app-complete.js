/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from 'https://unpkg.com/@polymer/polymer@3.0.0-pre.13/polymer-element.js';
// Define the class for a new element called custom-element
class CustomElement extends PolymerElement {

  static get template() {
    return html`
    <style>
        body {
            font: 16px Arial;
        }

        .autocomplete {
            position: relative;
        }

        .autocomplete-items {
            position: absolute;
            border-bottom: none;
            border-top: none;
            z-index: 99;
            top: 100%;
            left: 0;
            right: 0;
        }

        .autocomplete-items div {
            cursor: pointer;
            border-bottom: 1px solid #d4d4d4;
        }

        }
    </style>
    <div id="autocomplete-container">  
    <input type="text" autofocus="true" name="autofocus sample" placeholder="search people" id="autocomplete-input"></input>
    <ul id="autocomplete-results">
    </ul>
    </div>
    `;
  }

  constructor() {
    super();
  }

}
// Register the new element with the browser
customElements.define('app-complete', CustomElement);
