// const template = document.createElement('template');
// template.innerHTML = `
//   <style>
//   </style>
//   <button type="button">PRESS ME</button>
// `;

// export class AppButton extends HTMLElement {
//   // Attributes we care about getting values from.
//   // static get observedAttributes() {
//   //   return ['value'];
//   }
//   constructor() {
//     super();

//     this.Button
//       .addEventListener('click', function()
//       {console.log("I AM WORKING")} );
//   };

//   connectedCallback() {
//     this.innerHTML = <p>Hello From Web Component</p>;
// }

// customElements.define('appButton', AppButton);
// export class AppButton extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.innerHTML =
//       <p>Hello From Web Component</p>;
//   }
// }

// customElements.define('appButton', AppButton);
import {PolymerElement, html} from 'https://unpkg.com/@polymer/polymer@3.0.0-pre.13/polymer-element.js';

// // Define the element's API using an ES2015 class
class XCustom extends PolymerElement {

  // Define optional shadow DOM template
  static get template() { 
    return html`
      <style>
        /* CSS rules for your element */
      </style>

        <!-- shadow DOM for your element -->

      <button type="button" onclick="greetMe">[[greeting]]</button> <!-- data bindings in shadow DOM -->
    `;
  }

  // Declare properties for the element's public API
  static get properties() {
    return {
      greeting: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this.greeting = 'Hello!';
    // console.log(this.greeting);
  }

  // Add methods to the element's public API
  greetMe() {
    console.log(this.greeting);
  }
}

