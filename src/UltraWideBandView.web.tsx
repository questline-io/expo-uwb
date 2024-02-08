import * as React from 'react';

import { UltraWideBandViewProps } from './UltraWideBand.types';

export default function UltraWideBandView(props: UltraWideBandViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
