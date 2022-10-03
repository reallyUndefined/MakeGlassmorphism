import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import optionsReducers from "./options.slice";

export const store = configureStore({
  reducer: {
    options: optionsReducers,
  },
});

export const ReduxProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
