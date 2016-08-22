# Integration Testing

These tests hit the API endpoints and validate who system operations. These
should not be confused with Unit Tests that exercise a small piece of
functionality in isolation. These tests retest those same units of functionality
in the full context of the application.

One test file should exist per API path off the root path. Within that test file
any further API path branching should be collected under a `describe` block
with the final level of nesting reserved for the endpoint itself.
