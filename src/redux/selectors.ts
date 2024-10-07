import {RootState} from "./store.ts";

export const getValue = ((state: RootState) => state.data.value);