import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const DEFAULT_STATE: UserWithId[] = [
  {
    name: "Maria Antonieta de las  Nievas",
    id: crypto.randomUUID(),
    email: "maria@email.com",
    age: 20,
  },
  {
    name: "Juan Canales Saavedras",
    id: crypto.randomUUID(),
    email: "maria@email.com",
    age: 32,
  },
  {
    name: "Maria Antonieta de las  Nievas",
    id: crypto.randomUUID(),
    email: "maria@email.com",
    age: 24,
  },
];
export type UserId = string;
export interface User {
  name: string;
  age: number;
  email: string;
}
export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux_state__");
  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.find(
        (user) => user.id == action.payload.id
      );
      if (!isUserAlreadyDefined) {
        return [...state, action.payload];
      }
    },
  },
});

export default userSlice.reducer;
export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions;
