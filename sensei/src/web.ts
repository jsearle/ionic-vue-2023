import { WebPlugin } from '@capacitor/core';

import type { SenseiPlugin } from './definitions';

export class SenseiWeb extends WebPlugin implements SenseiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async initSensors(): Promise<{ result: string }> {
    console.log('Resultado', 'ok');
    return { result: 'ok' };
  }

  async getPressure(): Promise<{ value: number }> {
    const presion = 1000 + Math.random()*100
    console.log('Presión atmosférica', presion);
    return { value: presion };
  }

  async getLight(): Promise<{ value: number }> {
    const luz = Math.random()*3000
    console.log('Luz', luz);
    return { value: luz };
  }
}
