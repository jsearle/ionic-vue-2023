export interface SenseiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  initSensors(): Promise<{ result: string }>;
  getPressure(): Promise<{ value: number }>;
  getLight(): Promise<{ value: number }>;
}
