# Testing

## Unit Testing
All individual components, services, utilities, hooks, etc. should be thoroughly tested with attention to all edge cases.

Testing composite components should treated on a case by case basis. Elaborate composite components tend to change a lot
and become tech debt when the test break. E2e tests are better suited for testing this scenario.
- Tests will be run using [Vitest](https://vitest.dev/).
- React tests will use [@testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Storybook 
All individual components with a visual aspect should have storybook stories to demonstrate their usage as well as testing
their functionality. Again try to address diffferent use cases.

## E2E Testing
[TBD]

## Visual Testing
[TBD]

## Performance Testing
[TBD]

## A11y Testing
[TBD]
