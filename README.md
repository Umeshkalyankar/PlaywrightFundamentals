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
  - `example.spec.ts` – Example test
  - `01_Basics/` – Basic Playwright concepts and functionality
    - `BasicTest.spec.ts` – Basic test examples
    - `Test_Playwright.spec.ts` – Core Playwright features
    - `Browser_Context_Page.spec.ts` – Browser context and page management
    - `BCP_MultipleContext.spec.ts` – Multiple browser contexts
    - `BCP_MultiplePage.spec.ts` – Multiple pages management
    - `BrowserInjected.spec.ts` – Browser injection testing
    - `Test_Annotations.spec.ts` – Test annotations
    - `ttaCart.spec.ts` – Shopping cart test
  - `02_Locator_Strategy/` – Locator strategies and selectors
    - `Pro_CuraHealth.spec.ts` – CuraHealth login tests with locator strategies
    - `Project_Wingify.spec.ts` – Wingify project tests
- `playwright.config.ts` – Playwright runtime configuration
- `playwright-report/` – Generated HTML reports
- `test-results/` – Captured test artifacts
- `package.json` – Project dependencies and scripts

## Test Categories

### 01_Basics

Covers fundamental Playwright concepts including:

- Basic test setup and teardown
- Browser, context, and page management
- Test annotations and metadata
- Navigation and interactions

### 02_Locator_Strategy

Advanced locator strategies and selector techniques for:

- Web application testing (CuraHealth)
- UI automation with various locator strategies (Wingify)

## Notes

This project uses the default Playwright test runner and includes comprehensive test suites for exploring browser automation fundamentals, page interactions, and assertions.
