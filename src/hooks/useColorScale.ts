import { useMemo } from 'react';
import { scaleSequential } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';
import type { ScoredState } from '../types';

export function useColorScale(scoredStates: ScoredState[]) {
  return useMemo(() => {
    const scores = scoredStates.map((s) => s.weightedScore);
    const min = Math.min(...scores);
    const max = Math.max(...scores);
    const padding = (max - min) * 0.1 || 1;
    return scaleSequential(interpolateRdYlGn).domain([min - padding, max + padding]);
  }, [scoredStates]);
}
