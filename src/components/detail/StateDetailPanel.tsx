import type { ScoredState } from '../../types';
import { PARAMETER_KEYS, PARAMETER_META } from '../../types';

interface StateDetailPanelProps {
  state: ScoredState;
  stateColor: string;
  onClose: () => void;
}

export function StateDetailPanel({ state, stateColor, onClose }: StateDetailPanelProps) {

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{state.name}</h2>
          <p className="text-xs text-gray-500">{state.abbr} | FIPS: {state.id}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl leading-none"
        >
          &times;
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4 p-3 rounded-lg" style={{ backgroundColor: stateColor + '22' }}>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: stateColor }}
        >
          #{state.rank}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{state.weightedScore.toFixed(1)}</div>
          <div className="text-xs text-gray-500">Profitability Score</div>
        </div>
      </div>

      <div className="space-y-3">
        {PARAMETER_KEYS.map((key) => {
          const meta = PARAMETER_META[key];
          const norm = state.normalizedScores[key];
          const raw = state.parameters[key];

          return (
            <div key={key}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-600">{meta.label}</span>
                <span className="text-xs text-gray-900 font-medium">{meta.format(raw)}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${norm * 100}%`,
                    backgroundColor: interpolateBar(norm),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function interpolateBar(value: number): string {
  if (value > 0.7) return '#22c55e';
  if (value > 0.4) return '#eab308';
  return '#ef4444';
}
