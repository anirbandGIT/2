import {
  LitElement,
  html
} from 'lit-element';

// this is the model for the filters
const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

class TodoView extends LitElement {

  static get properties() {
    return {
      // todo objects array is needed for all the tasks
      todos: {
        type: Array
      },
      // filters will be values of string
      filter: {
        type: String
      },
      // this is for the user input
      task: {
        type: String
      }
    };
  }

  constructor() {
    // we initialise the values of properties
    super();
    this.todos = [];
    // to todos as no tasks added yet
    this.filter = VisibilityFilters.SHOW_ALL;
    // initiall filters will show all
    this.task = '';
    // initially no tasks
  }
  // with the render() we are able to write n HTML
  render() {
    return html `
      <p>todo-view</p>
    `;
  }
}
// registering element
// convention is to use app-todo-view
customElements.define('todo-view', TodoView);