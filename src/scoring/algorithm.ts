import type { StateData, ScoredState, ParameterKey } from '../types';
import { PARAMETER_KEYS, PARAMETER_META } from '../types';

export function computeScores(
  states: StateData[],
  weights: Record<ParameterKey, number>,
): ScoredState[] {
  const totalWeight = PARAMETER_KEYS.reduce((sum, k) => sum + weights[k], 0);

  const scored: ScoredState[] = states.map((state) => {
    const normalizedScores = {} as Record<ParameterKey, number>;
    let weightedSum = 0;

    for (const key of PARAMETER_KEYS) {
      const meta = PARAMETER_META[key];
      const range = meta.max - meta.min;
      let norm = range > 0 ? (state.parameters[key] - meta.min) / range : 0;
      norm = Math.max(0, Math.min(1, norm));
      if (!meta.higherIsBetter) norm = 1 - norm;

      normalizedScores[key] = norm;
      weightedSum += norm * weights[key];
    }

    const weightedScore = totalWeight > 0 ? (weightedSum / totalWeight) * 100 : 0;

    return { ...state, normalizedScores, weightedScore, rank: 0 };
  });

  scored.sort((a, b) => b.weightedScore - a.weightedScore);
  scored.forEach((s, i) => {
    s.rank = i + 1;
  });

  return scored;
}

export function getDefaultWeights(): Record<ParameterKey, number> {
  const weights = {} as Record<ParameterKey, number>;
  for (const key of PARAMETER_KEYS) {
    weights[key] = 1;
  }
  return weights;
}
