import 'vitest-localstorage-mock';
import 'jest-extended/all';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Configuring vitest with @testing library
// https://www.robinwieruch.de/vitest-react-testing-library/

// Automatically cleanup testing library renders.
afterEach(() => {
  cleanup();
});

// expect.extend
// https://vitest.dev/guide/extending-matchers.html
// Matchers should return an object (or a Promise of an object) with two keys.
// pass indicates whether there was a match or not,
//   and message provides a function with no arguments that returns an error message
//   in case of failure.
// Thus, when pass is false, message should return the error message for when
//   expect(x).yourMatcher() fails.
// And when pass is true, message should return the error message for when
//   expect(x).not.yourMatcher() fails.
