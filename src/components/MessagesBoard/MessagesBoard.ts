import { Block } from "../../modules/Block.js";
import { Field } from "../Field/Field.js";
import { MessagesList } from "../MessagesList/MessagesList.js";


export type MessagesBoardProps = {
  linkText: string;
  linkHref: string;
  messagesListInstance: MessagesList;
  searchFieldInstance: Field;
};

export class MessagesBoard extends Block {
    messagesList: MessagesList;
    searchField: Field;
    constructor(props:MessagesBoardProps) {
      super("aside", 'messages-board messenger__board', props);
    }


    render() {
      const Handlebars = window.Handlebars;
      if (this.props) {
        this.messagesList = this.props.messagesListInstance.renderToString();
        this.searchField = this.props.searchFieldInstance.renderToString();
      }


        const teamplate : string = `
          <div class="messages-board__top">
              <a class="messages-board__link js-focus-visible" href="{{linkHref}}">
                  {{linkText}}
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L5 5L1 1" stroke="#40375C" />
                  </svg>
              </a>
              {{{searchField}}}
          </div>
          {{{messagesList}}}

        `
        return Handlebars.compile(teamplate)({...this.props, messagesList: this.messagesList, searchField: this.searchField})
    }
  }
