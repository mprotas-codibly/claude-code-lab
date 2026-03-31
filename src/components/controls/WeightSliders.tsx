import type { ParameterKey } from '../../types';
import { PARAMETER_KEYS, PARAMETER_META } from '../../types';

interface WeightSlidersProps {
  weights: Record<ParameterKey, number>;
  onWeightChange: (key: ParameterKey, value: number) => void;
  onReset: () => void;
}

export function WeightSliders({ weights, onWeightChange, onReset }: WeightSlidersProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Parameter Weights</h2>
        <button
          onClick={onReset}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Reset to Equal
        </button>
      </div>
      <div className="space-y-3">
        {PARAMETER_KEYS.map((key) => {
          const meta = PARAMETER_META[key];
          const pct = Math.round(weights[key] * 100);
          return (
            <div key={key}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-gray-600">{meta.label}</label>
                <span className="text-xs text-gray-400 tabular-nums w-8 text-right">{pct}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={pct}
                onChange={(e) => onWeightChange(key, Number(e.target.value) / 100)}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
