// Require polyfill as fetch is not available by default in jsdom environment
import "whatwg-fetch";

import { server } from "../mocks/server";
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
