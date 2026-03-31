import type { ScoredState } from '../../types';

interface MapTooltipProps {
  state: ScoredState | null;
  x: number;
  y: number;
}

export function MapTooltip({ state, x, y }: MapTooltipProps) {
  if (!state) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm"
      style={{ left: x + 12, top: y - 10 }}
    >
      <div className="font-semibold">{state.name}</div>
      <div className="text-gray-300">
        Score: <span className="text-white font-medium">{state.weightedScore.toFixed(1)}</span>
        {' | '}
        Rank: <span className="text-white font-medium">#{state.rank}</span>
      </div>
    </div>
  );
}
