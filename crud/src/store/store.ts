import { configureStore, type Middleware } from "@reduxjs/toolkit";
import userReduce, { rollbackUser } from "./users/slice";
import { toast } from "sonner";
const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
};
const syncWithDatbase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const previousState = store.getState();
  next(action);
  console.log("type", type);

  if (type == "users/deleteUserById") {
    const userToRemove = previousState.users.find((user) => user.id == payload);
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) toast.success("Usuario guardado");
        throw new Error("Error al eliminar el usuario");
      })
      .catch(() => {
        toast.error(`Error al eliminar al usuario ${payload}`);
        if (userToRemove) store.dispatch(rollbackUser(userToRemove));
        console.log("Error");
      });
  }
};
export const store = configureStore({
  reducer: {
    users: userReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(persistanceMiddleware)
      .concat(syncWithDatbase),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
