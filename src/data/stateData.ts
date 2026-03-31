import type { StateData } from '../types';

// Mock data based on approximate real-world values:
// - Solar irradiance: NREL Solar Resource Data
// - Land cost: USDA Land Values Survey averages
// - Electricity price: EIA state retail prices
// - Existing solar capacity: SEIA state rankings
// - Grid infrastructure: estimated from transmission capacity
// - Land availability: estimated from undeveloped land percentage

export const stateData: StateData[] = [
  { id: '01', name: 'Alabama', abbr: 'AL', parameters: { solarIrradiance: 4.8, landAvailability: 55, landCost: 4200, electricityPrice: 0.123, existingSolarCapacity: 1200, gridInfrastructureScore: 5 } },
  { id: '02', name: 'Alaska', abbr: 'AK', parameters: { solarIrradiance: 3.1, landAvailability: 85, landCost: 2500, electricityPrice: 0.225, existingSolarCapacity: 50, gridInfrastructureScore: 2 } },
  { id: '04', name: 'Arizona', abbr: 'AZ', parameters: { solarIrradiance: 6.5, landAvailability: 70, landCost: 4500, electricityPrice: 0.127, existingSolarCapacity: 6500, gridInfrastructureScore: 7 } },
  { id: '05', name: 'Arkansas', abbr: 'AR', parameters: { solarIrradiance: 4.7, landAvailability: 60, landCost: 3800, electricityPrice: 0.098, existingSolarCapacity: 800, gridInfrastructureScore: 4 } },
  { id: '06', name: 'California', abbr: 'CA', parameters: { solarIrradiance: 5.8, landAvailability: 35, landCost: 15000, electricityPrice: 0.270, existingSolarCapacity: 39000, gridInfrastructureScore: 9 } },
  { id: '08', name: 'Colorado', abbr: 'CO', parameters: { solarIrradiance: 5.5, landAvailability: 65, landCost: 5200, electricityPrice: 0.134, existingSolarCapacity: 4200, gridInfrastructureScore: 7 } },
  { id: '09', name: 'Connecticut', abbr: 'CT', parameters: { solarIrradiance: 4.0, landAvailability: 20, landCost: 25000, electricityPrice: 0.248, existingSolarCapacity: 1100, gridInfrastructureScore: 6 } },
  { id: '10', name: 'Delaware', abbr: 'DE', parameters: { solarIrradiance: 4.3, landAvailability: 30, landCost: 13000, electricityPrice: 0.128, existingSolarCapacity: 350, gridInfrastructureScore: 5 } },
  { id: '11', name: 'District of Columbia', abbr: 'DC', parameters: { solarIrradiance: 4.2, landAvailability: 5, landCost: 48000, electricityPrice: 0.135, existingSolarCapacity: 150, gridInfrastructureScore: 8 } },
  { id: '12', name: 'Florida', abbr: 'FL', parameters: { solarIrradiance: 5.4, landAvailability: 40, landCost: 11000, electricityPrice: 0.138, existingSolarCapacity: 11000, gridInfrastructureScore: 7 } },
  { id: '13', name: 'Georgia', abbr: 'GA', parameters: { solarIrradiance: 4.9, landAvailability: 50, landCost: 5500, electricityPrice: 0.126, existingSolarCapacity: 5500, gridInfrastructureScore: 6 } },
  { id: '15', name: 'Hawaii', abbr: 'HI', parameters: { solarIrradiance: 5.6, landAvailability: 15, landCost: 30000, electricityPrice: 0.280, existingSolarCapacity: 1200, gridInfrastructureScore: 4 } },
  { id: '16', name: 'Idaho', abbr: 'ID', parameters: { solarIrradiance: 4.8, landAvailability: 70, landCost: 4000, electricityPrice: 0.098, existingSolarCapacity: 900, gridInfrastructureScore: 5 } },
  { id: '17', name: 'Illinois', abbr: 'IL', parameters: { solarIrradiance: 4.2, landAvailability: 45, landCost: 9500, electricityPrice: 0.142, existingSolarCapacity: 2500, gridInfrastructureScore: 7 } },
  { id: '18', name: 'Indiana', abbr: 'IN', parameters: { solarIrradiance: 4.1, landAvailability: 50, landCost: 8500, electricityPrice: 0.132, existingSolarCapacity: 2200, gridInfrastructureScore: 6 } },
  { id: '19', name: 'Iowa', abbr: 'IA', parameters: { solarIrradiance: 4.3, landAvailability: 55, landCost: 9000, electricityPrice: 0.128, existingSolarCapacity: 800, gridInfrastructureScore: 6 } },
  { id: '20', name: 'Kansas', abbr: 'KS', parameters: { solarIrradiance: 5.0, landAvailability: 75, landCost: 3200, electricityPrice: 0.125, existingSolarCapacity: 600, gridInfrastructureScore: 5 } },
  { id: '21', name: 'Kentucky', abbr: 'KY', parameters: { solarIrradiance: 4.3, landAvailability: 50, landCost: 5000, electricityPrice: 0.112, existingSolarCapacity: 400, gridInfrastructureScore: 5 } },
  { id: '22', name: 'Louisiana', abbr: 'LA', parameters: { solarIrradiance: 4.9, landAvailability: 45, landCost: 4500, electricityPrice: 0.098, existingSolarCapacity: 1500, gridInfrastructureScore: 5 } },
  { id: '23', name: 'Maine', abbr: 'ME', parameters: { solarIrradiance: 3.8, landAvailability: 60, landCost: 4000, electricityPrice: 0.198, existingSolarCapacity: 500, gridInfrastructureScore: 4 } },
  { id: '24', name: 'Maryland', abbr: 'MD', parameters: { solarIrradiance: 4.4, landAvailability: 25, landCost: 16000, electricityPrice: 0.148, existingSolarCapacity: 2800, gridInfrastructureScore: 7 } },
  { id: '25', name: 'Massachusetts', abbr: 'MA', parameters: { solarIrradiance: 3.9, landAvailability: 18, landCost: 22000, electricityPrice: 0.260, existingSolarCapacity: 4200, gridInfrastructureScore: 7 } },
  { id: '26', name: 'Michigan', abbr: 'MI', parameters: { solarIrradiance: 3.8, landAvailability: 50, landCost: 7500, electricityPrice: 0.178, existingSolarCapacity: 1400, gridInfrastructureScore: 6 } },
  { id: '27', name: 'Minnesota', abbr: 'MN', parameters: { solarIrradiance: 4.0, landAvailability: 55, landCost: 7000, electricityPrice: 0.138, existingSolarCapacity: 2200, gridInfrastructureScore: 6 } },
  { id: '28', name: 'Mississippi', abbr: 'MS', parameters: { solarIrradiance: 4.8, landAvailability: 60, landCost: 3200, electricityPrice: 0.112, existingSolarCapacity: 700, gridInfrastructureScore: 4 } },
  { id: '29', name: 'Missouri', abbr: 'MO', parameters: { solarIrradiance: 4.5, landAvailability: 55, landCost: 5000, electricityPrice: 0.118, existingSolarCapacity: 1200, gridInfrastructureScore: 5 } },
  { id: '30', name: 'Montana', abbr: 'MT', parameters: { solarIrradiance: 4.6, landAvailability: 80, landCost: 2000, electricityPrice: 0.115, existingSolarCapacity: 200, gridInfrastructureScore: 3 } },
  { id: '31', name: 'Nebraska', abbr: 'NE', parameters: { solarIrradiance: 4.7, landAvailability: 75, landCost: 4500, electricityPrice: 0.112, existingSolarCapacity: 300, gridInfrastructureScore: 5 } },
  { id: '32', name: 'Nevada', abbr: 'NV', parameters: { solarIrradiance: 6.2, landAvailability: 75, landCost: 3500, electricityPrice: 0.118, existingSolarCapacity: 5500, gridInfrastructureScore: 6 } },
  { id: '33', name: 'New Hampshire', abbr: 'NH', parameters: { solarIrradiance: 3.8, landAvailability: 35, landCost: 12000, electricityPrice: 0.215, existingSolarCapacity: 300, gridInfrastructureScore: 4 } },
  { id: '34', name: 'New Jersey', abbr: 'NJ', parameters: { solarIrradiance: 4.2, landAvailability: 15, landCost: 28000, electricityPrice: 0.172, existingSolarCapacity: 4500, gridInfrastructureScore: 8 } },
  { id: '35', name: 'New Mexico', abbr: 'NM', parameters: { solarIrradiance: 6.3, landAvailability: 78, landCost: 2800, electricityPrice: 0.132, existingSolarCapacity: 4800, gridInfrastructureScore: 5 } },
  { id: '36', name: 'New York', abbr: 'NY', parameters: { solarIrradiance: 3.8, landAvailability: 25, landCost: 18000, electricityPrice: 0.205, existingSolarCapacity: 4600, gridInfrastructureScore: 8 } },
  { id: '37', name: 'North Carolina', abbr: 'NC', parameters: { solarIrradiance: 4.8, landAvailability: 45, landCost: 6500, electricityPrice: 0.118, existingSolarCapacity: 8500, gridInfrastructureScore: 7 } },
  { id: '38', name: 'North Dakota', abbr: 'ND', parameters: { solarIrradiance: 4.2, landAvailability: 80, landCost: 2800, electricityPrice: 0.108, existingSolarCapacity: 100, gridInfrastructureScore: 3 } },
  { id: '39', name: 'Ohio', abbr: 'OH', parameters: { solarIrradiance: 3.9, landAvailability: 45, landCost: 8000, electricityPrice: 0.138, existingSolarCapacity: 1800, gridInfrastructureScore: 7 } },
  { id: '40', name: 'Oklahoma', abbr: 'OK', parameters: { solarIrradiance: 5.1, landAvailability: 70, landCost: 3000, electricityPrice: 0.108, existingSolarCapacity: 2200, gridInfrastructureScore: 5 } },
  { id: '41', name: 'Oregon', abbr: 'OR', parameters: { solarIrradiance: 4.0, landAvailability: 55, landCost: 5500, electricityPrice: 0.118, existingSolarCapacity: 1200, gridInfrastructureScore: 6 } },
  { id: '42', name: 'Pennsylvania', abbr: 'PA', parameters: { solarIrradiance: 3.9, landAvailability: 35, landCost: 10000, electricityPrice: 0.158, existingSolarCapacity: 1800, gridInfrastructureScore: 7 } },
  { id: '44', name: 'Rhode Island', abbr: 'RI', parameters: { solarIrradiance: 4.0, landAvailability: 12, landCost: 24000, electricityPrice: 0.245, existingSolarCapacity: 200, gridInfrastructureScore: 5 } },
  { id: '45', name: 'South Carolina', abbr: 'SC', parameters: { solarIrradiance: 4.9, landAvailability: 50, landCost: 5500, electricityPrice: 0.132, existingSolarCapacity: 2800, gridInfrastructureScore: 6 } },
  { id: '46', name: 'South Dakota', abbr: 'SD', parameters: { solarIrradiance: 4.5, landAvailability: 78, landCost: 3000, electricityPrice: 0.118, existingSolarCapacity: 100, gridInfrastructureScore: 3 } },
  { id: '47', name: 'Tennessee', abbr: 'TN', parameters: { solarIrradiance: 4.6, landAvailability: 48, landCost: 5500, electricityPrice: 0.112, existingSolarCapacity: 1500, gridInfrastructureScore: 6 } },
  { id: '48', name: 'Texas', abbr: 'TX', parameters: { solarIrradiance: 5.5, landAvailability: 72, landCost: 4000, electricityPrice: 0.125, existingSolarCapacity: 18000, gridInfrastructureScore: 8 } },
  { id: '49', name: 'Utah', abbr: 'UT', parameters: { solarIrradiance: 5.8, landAvailability: 68, landCost: 3800, electricityPrice: 0.108, existingSolarCapacity: 3200, gridInfrastructureScore: 6 } },
  { id: '50', name: 'Vermont', abbr: 'VT', parameters: { solarIrradiance: 3.7, landAvailability: 40, landCost: 8000, electricityPrice: 0.195, existingSolarCapacity: 400, gridInfrastructureScore: 4 } },
  { id: '51', name: 'Virginia', abbr: 'VA', parameters: { solarIrradiance: 4.5, landAvailability: 40, landCost: 8500, electricityPrice: 0.128, existingSolarCapacity: 4200, gridInfrastructureScore: 7 } },
  { id: '53', name: 'Washington', abbr: 'WA', parameters: { solarIrradiance: 3.6, landAvailability: 50, landCost: 6500, electricityPrice: 0.105, existingSolarCapacity: 800, gridInfrastructureScore: 7 } },
  { id: '54', name: 'West Virginia', abbr: 'WV', parameters: { solarIrradiance: 4.0, landAvailability: 55, landCost: 3200, electricityPrice: 0.118, existingSolarCapacity: 150, gridInfrastructureScore: 4 } },
  { id: '55', name: 'Wisconsin', abbr: 'WI', parameters: { solarIrradiance: 3.9, landAvailability: 50, landCost: 7500, electricityPrice: 0.148, existingSolarCapacity: 900, gridInfrastructureScore: 6 } },
  { id: '56', name: 'Wyoming', abbr: 'WY', parameters: { solarIrradiance: 5.0, landAvailability: 82, landCost: 1800, electricityPrice: 0.105, existingSolarCapacity: 200, gridInfrastructureScore: 3 } },
];

// Lookup map by FIPS code for fast access when joining with TopoJSON
export const stateDataByFips = new Map(stateData.map((s) => [s.id, s]));
