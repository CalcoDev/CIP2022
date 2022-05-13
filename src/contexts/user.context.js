import { atom, selector } from "recoil";

const userState = atom({
  key: "user",
  default: {
    currentUser: null,
  },
});

export default userState;
