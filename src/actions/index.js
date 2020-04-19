import { NAME_HOLDER } from "./types";

export const holderName = (name) => {
  return {
    type: NAME_HOLDER,
    payload: name,
  };
};
