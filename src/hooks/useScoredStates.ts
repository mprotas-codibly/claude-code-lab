import { useMemo } from 'react';
import type { ParameterKey, ScoredState, StateData } from '../types';
import { computeScores } from '../scoring/algorithm';

export function useScoredStates(
  states: StateData[],
  weights: Record<ParameterKey, number>,
): ScoredState[] {
  return useMemo(() => computeScores(states, weights), [states, weights]);
}
