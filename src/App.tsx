import { useState, useCallback } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { stateData } from './data/stateData';
import { useScoredStates } from './hooks/useScoredStates';
import { USMap } from './components/map/USMap';
import { MapTooltip } from './components/map/MapTooltip';
import { WeightSliders } from './components/controls/WeightSliders';
import { StateDetailPanel } from './components/detail/StateDetailPanel';
import { useColorScale } from './hooks/useColorScale';
import type { ScoredState, ParameterKey } from './types';

function Dashboard() {
  const { state, dispatch } = useAppContext();
  const scoredStates = useScoredStates(stateData, state.weights);

  const colorScale = useColorScale(scoredStates);
  const [tooltip, setTooltip] = useState<{ state: ScoredState; x: number; y: number } | null>(null);

  const selectedState = state.selectedStateId
    ? scoredStates.find((s) => s.id === state.selectedStateId) ?? null
    : null;

  const handleStateClick = useCallback(
    (id: string) => {
      dispatch({ type: 'SELECT_STATE', id: state.selectedStateId === id ? null : id });
    },
    [dispatch, state.selectedStateId],
  );

  const handleStateHover = useCallback(
    (hovered: ScoredState | null, event?: React.MouseEvent) => {
      if (hovered && event) {
        setTooltip({ state: hovered, x: event.clientX, y: event.clientY });
      } else {
        setTooltip(null);
      }
    },
    [],
  );

  const handleWeightChange = useCallback(
    (key: ParameterKey, value: number) => {
      dispatch({ type: 'SET_WEIGHT', key, value });
    },
    [dispatch],
  );

  const handleResetWeights = useCallback(() => {
    dispatch({ type: 'RESET_WEIGHTS' });
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Solar Farm Profitability Analyzer</h1>
        <p className="text-sm text-gray-500">
          Find the best US states for your next solar farm investment
        </p>
      </header>

      <main className="p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Left column: Map + Table */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <USMap
                scoredStates={scoredStates}
                selectedStateId={state.selectedStateId}
                onStateClick={handleStateClick}
                onStateHover={handleStateHover}
              />
            </div>

            {/* Top 10 quick ranking */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Top 10 States
              </h2>
              <div className="space-y-1">
                {scoredStates.slice(0, 10).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleStateClick(s.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                      s.id === state.selectedStateId
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-gray-400 w-5">#{s.rank}</span>
                    <span className="font-medium text-gray-900 flex-1">{s.name}</span>
                    <span className="text-xs font-semibold tabular-nums text-gray-600">
                      {s.weightedScore.toFixed(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Controls + Detail */}
          <div className="space-y-4">
            <WeightSliders
              weights={state.weights}
              onWeightChange={handleWeightChange}
              onReset={handleResetWeights}
            />
            {selectedState && (
              <StateDetailPanel
                state={selectedState}
                stateColor={colorScale(selectedState.weightedScore)}
                onClose={() => dispatch({ type: 'SELECT_STATE', id: null })}
              />
            )}
          </div>
        </div>
      </main>

      <MapTooltip state={tooltip?.state ?? null} x={tooltip?.x ?? 0} y={tooltip?.y ?? 0} />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}

export default App;
