import ACTION_TYPE from ".";
import { ChatType, Message } from "../types";

const TextMessageAction = (userId: string, messages: Message[]): ChatType["action"] => {
  return {
    type: ACTION_TYPE.TEXTED_MESSAGE,
    payload: {
      userId: userId,
      messages: messages,
    },
  };
};

export default TextMessageAction;
