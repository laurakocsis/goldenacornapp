import React from 'react';

export function buyAcorn(number) {
  return { 
    type: 'BUY_ACORN',
    payload: number,
  }
}

export function eatAcorn(number) {
  return {
    type: 'EAT_ACORN',
    payload: number,
  }
}
