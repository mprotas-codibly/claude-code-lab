export interface StateParameters {
  solarIrradiance: number;         // kWh/m²/day (range: ~3.0 - 7.0)
  landAvailability: number;        // percentage 0-100
  landCost: number;                // $/acre (range: ~1,000 - 50,000)
  electricityPrice: number;        // $/kWh (range: ~0.07 - 0.30)
  existingSolarCapacity: number;   // MW (range: 0 - 40,000)
  gridInfrastructureScore: number; // 1-10
}

export type ParameterKey = keyof StateParameters;

export const PARAMETER_KEYS: ParameterKey[] = [
  'solarIrradiance',
  'landAvailability',
  'landCost',
  'electricityPrice',
  'existingSolarCapacity',
  'gridInfrastructureScore',
];

export interface StateData {
  id: string;   // FIPS code (e.g., "06" for California)
  name: string;
  abbr: string;
  parameters: StateParameters;
}

export interface ParameterMeta {
  label: string;
  unit: string;
  higherIsBetter: boolean;
  min: number;
  max: number;
  format: (v: number) => string;
}

export const PARAMETER_META: Record<ParameterKey, ParameterMeta> = {
  solarIrradiance: {
    label: 'Solar Irradiance',
    unit: 'kWh/m²/day',
    higherIsBetter: true,
    min: 3.0,
    max: 7.0,
    format: (v) => v.toFixed(1),
  },
  landAvailability: {
    label: 'Land Availability',
    unit: '%',
    higherIsBetter: true,
    min: 0,
    max: 100,
    format: (v) => `${v.toFixed(0)}%`,
  },
  landCost: {
    label: 'Land Cost',
    unit: '$/acre',
    higherIsBetter: false,
    min: 1000,
    max: 50000,
    format: (v) => `$${v.toLocaleString()}`,
  },
  electricityPrice: {
    label: 'Electricity Price',
    unit: '$/kWh',
    higherIsBetter: true,
    min: 0.07,
    max: 0.30,
    format: (v) => `$${v.toFixed(3)}`,
  },
  existingSolarCapacity: {
    label: 'Existing Solar Capacity',
    unit: 'MW',
    higherIsBetter: false,
    min: 0,
    max: 40000,
    format: (v) => `${v.toLocaleString()} MW`,
  },
  gridInfrastructureScore: {
    label: 'Grid Infrastructure',
    unit: 'score',
    higherIsBetter: true,
    min: 1,
    max: 10,
    format: (v) => v.toFixed(0),
  },
};

export interface ScoredState extends StateData {
  normalizedScores: Record<ParameterKey, number>;
  weightedScore: number;
  rank: number;
}

export interface ParameterFilter {
  key: ParameterKey;
  min: number;
  max: number;
  active: boolean;
}
