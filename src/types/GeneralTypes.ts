import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from '../redux/reducer';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppAction= ThunkAction<void, RootState, unknown, AnyAction>;

