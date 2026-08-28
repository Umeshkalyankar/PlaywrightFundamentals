# Playwright Fundamentals

This repository contains a Playwright test project for exploring browser automation fundamentals, page interactions, locators, session storage, multi-element handling, web tables, and test reporting.

## Project setup

```bash
npm install
npx playwright install
```

## Run the tests

```bash
npx playwright test
```

Run a specific suite or test file:

```bash
npx playwright test tests/04_Session_Storage/BankDashboard.spec.ts
```

Open the HTML report after a test run:

```bash
npx playwright show-report
```

Generate or serve an Allure report when Allure results are available:

```bash
npm run allure:generate
npm run allure:open
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
    - `CuraHealth.spec.ts` – Cura Health login scenarios
    - `Wingify_Loacators.spec.ts` – Wingify locator examples
    - `Xpath.spec.ts` – XPath locator examples
  - `03_Locator_Commands/` – Locator commands and end-to-end interactions
    - `PlaywrightLocator.spec.ts` – Locator and transfer workflow example
  - `04_Session_Storage/` – Session storage and authenticated-state scenarios
    - `BankDashboard.spec.ts` – Bank dashboard session scenario
    - `BankLoginSessionStorage.spec.ts` – Login state with session storage
    - `SessionStorage.spec.ts` – Session storage examples
    - `test_ttaCartInventory.spec.ts` – Cart inventory session scenario
  - `05_Allure_Reporting/` – Allure reporting examples
  - `06_Multi_Element/` – Interactions with multiple matching elements
    - `MultiElement.spec.ts` – Multi-element examples
    - `Filter_Concept.spec.ts` – Filtering matching elements
  - `07_Webtables/` – Web table interactions and data extraction
    - `EmployeeDirectoryTable.spec.ts` – Employee directory table scenarios
    - `HandleWebtable.spec.ts` – Web table handling examples
    - `ByFilter.spec.ts` – Filtering table rows
    - `CompaniesDirectory.spec.ts` – Companies directory table scenarios
    - `OrangeHrm_Table.spec.ts` – OrangeHRM table scenarios
    - `Pagination.spec.ts` – Paginated table interactions
    - `Pagination_Function.spec.ts` – Reusable pagination workflow
    - `Webtable_xpath.spec.ts` – XPath-based table interactions
  - `Practice/` – Practice scenarios
- `playwright.config.ts` – Playwright runtime configuration
- `playwright-report/` – Generated HTML report output
- `allure-results/` – Generated Allure test results
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

Advanced locator strategies and selector techniques covering:

- Cura Health and Facebook web application testing
- Wingify UI automation with role-based and other locator strategies
- XPath selectors

### 03_Locator_Commands

Covers combining Playwright locators and commands to complete an authenticated money-transfer workflow.

### 04_Session_Storage

Covers preserving and reusing browser session state for authenticated workflows, including bank dashboard and shopping cart scenarios.

### 06_Multi_Element

Covers locating, filtering, and interacting with multiple elements that share the same selector or role.

### 07_Webtables

Covers reading, filtering, paginating, and interacting with tabular data in web applications.

## Notes

This project uses the Playwright test runner. HTML reports, Allure results, and test artifacts are generated locally and should not be treated as source files.
