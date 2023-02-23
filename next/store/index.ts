import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import reducer from "./reducers";

export type RootState = ReturnType<typeof Store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

const Store = configureStore({ reducer });

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({ reducer, preloadedState });
}

export default Store;
