import React from 'react';
import STATE from '../STATE';
import HooksUseState from '../HooksUseState';
import Counters from '../Counters';
import Cart from "../ThapaCart/Cart";

export default function CountApp() {
  return (
    <div>
      <STATE />
      <HooksUseState />
      <Counters />
      <Cart />
    </div>
  )
}
