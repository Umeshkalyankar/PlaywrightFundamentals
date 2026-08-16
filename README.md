# Playwright Fundamentals

This repository contains a basic Playwright test project for exploring browser automation fundamentals, page interactions, and assertions.

## Project setup

1. Install dependencies:
   npm install
2. Install browser binaries for Playwright:
   npx playwright install

## Run the tests

```bash
npx playwright test
```

## Project structure

- `tests/` – Playwright test files
- `playwright.config.ts` – Playwright runtime configuration
- `playwright-report/` – generated HTML reports
- `test-results/` – captured test artifacts

## Notes

This project uses the default Playwright test runner and includes a simple example test that opens the Playwright website and verifies key page content.
