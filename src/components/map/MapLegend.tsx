import { interpolateRdYlGn } from 'd3-scale-chromatic';

export function MapLegend() {
  const stops = Array.from({ length: 11 }, (_, i) => i * 10);

  return (
    <div className="flex items-center gap-2 mt-2 px-2">
      <span className="text-xs text-gray-500">Low</span>
      <div className="flex-1 h-3 rounded overflow-hidden flex">
        {stops.map((val) => (
          <div
            key={val}
            className="flex-1"
            style={{ backgroundColor: interpolateRdYlGn(val / 100) }}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">High</span>
    </div>
  );
}
