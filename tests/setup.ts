import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
 cleanup(); // does cleanup after each test that was mounted with the render function

 vi.clearAllMocks();
})