import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to UltraWideBand.web.ts
// and on native platforms to UltraWideBand.ts
import UltraWideBandModule from './UltraWideBandModule';
import UltraWideBandView from './UltraWideBandView';
import { ChangeEventPayload, UltraWideBandViewProps } from './UltraWideBand.types';

// Get the native constant value.
export const PI = UltraWideBandModule.PI;

export function hello(): string {
  return UltraWideBandModule.hello();
}

export async function setValueAsync(value: string) {
  return await UltraWideBandModule.setValueAsync(value);
}

const emitter = new EventEmitter(UltraWideBandModule ?? NativeModulesProxy.UltraWideBand);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { UltraWideBandView, UltraWideBandViewProps, ChangeEventPayload };
