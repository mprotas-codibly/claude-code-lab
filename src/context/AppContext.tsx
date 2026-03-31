import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { ParameterKey } from '../types';
import { getDefaultWeights } from '../scoring/algorithm';

interface AppState {
  weights: Record<ParameterKey, number>;
  selectedStateId: string | null;
}

type Action =
  | { type: 'SET_WEIGHT'; key: ParameterKey; value: number }
  | { type: 'RESET_WEIGHTS' }
  | { type: 'SELECT_STATE'; id: string | null };

const initialState: AppState = {
  weights: getDefaultWeights(),
  selectedStateId: null,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_WEIGHT':
      return { ...state, weights: { ...state.weights, [action.key]: action.value } };
    case 'RESET_WEIGHTS':
      return { ...state, weights: getDefaultWeights() };
    case 'SELECT_STATE':
      return { ...state, selectedStateId: action.id };
    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}

