import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { UltraWideBandViewProps } from './UltraWideBand.types';

const NativeView: React.ComponentType<UltraWideBandViewProps> =
  requireNativeViewManager('UltraWideBand');

export default function UltraWideBandView(props: UltraWideBandViewProps) {
  return <NativeView {...props} />;
}
