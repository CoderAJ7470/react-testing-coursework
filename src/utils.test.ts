import { describe, expect, it } from 'vitest';
import { range } from './utils';

describe('In the utils file', () => {
 describe('the range function', () => {
  it('returns the correct result for a given range 1-6', () => {
   const result = range(1, 6);
   expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns the correct result for a given range 41-46', () => {
   const result = range(41, 46);
   expect(result).toEqual([41, 42, 43, 44, 45]);
  });
 })
});