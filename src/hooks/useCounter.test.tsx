import { describe, it } from 'vitest';
import useCounter from './useCounter';
import { act, render, renderHook } from '@testing-library/react';

describe('The useCounter hook', () => {
  it('should render the initial count', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toEqual(0);
  });

  it('should render the passed in count of 10', () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toEqual(10);
  });

  it('should increment the initial count of 0 to 1', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);
  });
});
