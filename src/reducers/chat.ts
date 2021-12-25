import { initialChatState } from "../stores/initialState";
import { ChatType } from "../types";

const ChatReducer = (state = initialChatState, action: ChatType["action"]): ChatType["state"] => {
  switch (action.type) {
    case "TEXTED_MESSAGE":
      if (!state.messages[action.payload.userId]) {
        state.messages[action.payload.userId] = action.payload.messages;
      } else {
        state.messages[action.payload.userId] = [...state.messages[action.payload.userId], ...action.payload.messages];
      }
      return {
        ...state,
        messages: state.messages,
      };
    default:
      return state;
  }
};

export default ChatReducer;
