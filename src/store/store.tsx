import { createStore, applyMiddleware, AnyAction } from "redux";
import ReduxThunk from "redux-thunk";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
// import testReducer from "./user/reducers";
import rootReducer from './reducer'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from "react-redux";

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, AnyAction>;
