import { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import type { ScoredState } from '../../types';
import { useColorScale } from '../../hooks/useColorScale';
import { MapLegend } from './MapLegend';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

interface USMapProps {
  scoredStates: ScoredState[];
  selectedStateId: string | null;
  onStateClick: (stateId: string) => void;
  onStateHover: (state: ScoredState | null, event?: React.MouseEvent) => void;
}

export const USMap = memo(function USMap({
  scoredStates,
  selectedStateId,
  onStateClick,
  onStateHover,
}: USMapProps) {
  const colorScale = useColorScale(scoredStates);
  const stateMap = new Map(scoredStates.map((s) => [s.id, s]));

  return (
    <div className="relative">
      <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateId = String(geo.id).padStart(2, '0');
              const scored = stateMap.get(stateId);
              const isSelected = stateId === selectedStateId;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={scored ? colorScale(scored.weightedScore) : '#ddd'}
                  stroke={isSelected ? '#1e3a5f' : '#fff'}
                  strokeWidth={isSelected ? 2 : 0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', opacity: 0.85, cursor: 'pointer' },
                    pressed: { outline: 'none' },
                  }}
                  onClick={() => onStateClick(stateId)}
                  onMouseEnter={(e) => scored && onStateHover(scored, e)}
                  onMouseLeave={() => onStateHover(null)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <MapLegend />
    </div>
  );
});
