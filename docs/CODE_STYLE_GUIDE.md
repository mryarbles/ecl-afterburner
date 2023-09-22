# ECL Afterburner Code Style Guidelines
## Table of Contents
* [I Maintainability](#maintainability)
* [II Performance](#performance)
* [Style](#style)
* [Naming Conventions](#naming-conventions)
* [CSS](#css)
* [Javascript](#javascript)
* [A11y](#a11y)
* [Http Services](#services)
* [Testing](#testing)

# Primary Goals

## I Maintainability <a name="maintainability" />
In a building a product like Afterburner, features and visuals often change.  Thus code maintainability is of paramount importance and is the primary goal of this document.

* The code has to both work and be easily understood.
* If an application is not easily understood, it is harder to maintain, harder to extend, and is much less valuable.
* Always keep reuse in mind. On the other hand, remember that abstracting for future needs is time-consuming and those future needs may never materialize. This extra work has to be weighed against the likelihood of future utility.
* Avoid duplication of code - fixing bugs twice is no fun.
* Separate concerns. Styling is separate from logic, API requests are separate from state management, etc.
* Components, Classes, Functions, and Methods should be kept simple.
* Avoid large constructs. If a Component, Function, Class, or Method’s logic is getting “bloated”, break logic into smaller parts.
* Strive to make the code easily testable.
* When possible, make functions and methods [pure](https://en.wikipedia.org/wiki/Pure_function). Pure functions are really easy to test!
* Pass all dependencies as arguments of a class or function, or props of a component. By passing dependencies into a function or component it makes it much easier to test - mocking is hard and time consuming. 
* Move business logic into stores?
* Strive to make every page and component look perfect when compared to the design comp.
* Always build with mobile-first responsive mindset.
* Avoid [code smell](https://en.wikipedia.org/wiki/Code_smell).
* We have a lot of legacy logic that is hard to understand. We should strive to simplify javascript and CSS whenever possible.

## II Performance <a name="performance" />
* Writing maintainable code should engender better, more performant code
* Limit network requests
* Optimize images, svgs, fonts, etc.
* Optimize algorithms, but not at the expense of maintainability.
* Avoid code duplication.
* Utilize cache when it’s an option
* Don't include a library if it’s not necessary
* Limit dom elements whenever possible.
* Follow React performance best practices guidelines. [Thinking in React](https://react.dev/learn/thinking-in-react)
* Bugs are bad. Write unit tests. Think about edge cases.
* Utilize code splitting when applicable. When adding a new route make sure that it’s content is loaded on demand.

---

# Style <a name="style" />

## Organization & Uniformity

Linting directives will enforce many rules to keep code looking uniform. Clean up all warnings before making a pull request.

Examine the structure of the current code base, and try to stick with current conventions.

## Naming Conventions <a name="naming-conventions" />

### Directories

Directories should always be named using kebab case for all asset or package directories, locally and on S3.

`images/range-finder`

### Javascript

Components and Class modules should use PascalCase and named exactly like their default export:

`JumpingComponent.tsx`

Libraries or namespaces should be named using camelCase, with a name that describes the intent of the contained code.

`stringUtils.js`

Unit test files always should mirror the module that they are meant to test, and end in .test.js(x). 

`JumpingComponent.test.jsx`

### CSS

Module css files should mirror the component they are styling.

`JumpingComponent.css`

### Application Routes

Should always use kebab case!

* **YES**: legal/terms-and-conditions/…
* **NO**: legal/Terms&Conditions/...

### Thoughtful and Consistent Naming

Goals:

* Names for packages, functions, methods, and properties should indicate their purpose.
* The code has to both work and be easily understood.
* If an application is not easily understood, it is harder to maintain, harder to extend, and is much less valuable.
* A long method name that indicates exactly what the method does, is better than an unclear yet concise name.
  ** An overly-long method name, on the other hand, can also lower readability of code.

Guidelines:

* camelCase for all variables, methods, and properties.
* PascalCase for all Class names.
* UPPER_CASE for all static constants.
* PascalCase for all element ids.
* Kebab case for directories and routes.
* Most method and function names should start with a verb and describe their purpose.
```
loadFileTypes()
```
* Argument and parameter names should serve to inform the reader of their purpose and type.
```
loadProfile(userId)
```
* Event handlers should start with on and end with a descriptive name indicating the event they are handling.
```
onUploadSuccess = (event) => {}
```
* All variables and properties should have descriptive names describing their contents. The only exceptions may be short-lived placeholders or iterator indexes. In this case, the variable should be created near its use to limit the scope and ease understanding of its purpose.
```
for(let x =0,y=10; x<y; x++)
```
* Boolean properties or variables should start with is, has, will, should, etc.
```
isActive: boolean = false;
hasErrors: boolean = true;
```
* Property names should indicate their purpose and structure, because they don’t adhere to previously discussed conventions, the reader can assume that the variable contains an object of indicated type:
```
courseList: Array;
imageMap: IImageMap;
```

**Why?**

```
function chapters() {
[ code ]
}

function renderChapters() {
[code]
}
```
The former could return a list of chapters. It could render a list of chapters. You have to read the function to determine what the function does. The latter is much more descriptive of its purpose, and you can infer that its purpose is to render a list of chapter dom elements. Brevity is great unless it leads to ambiguity.

---

## Imports
Install yarn modules using -E parameter (This removes the ^ character from dependency version ).
```
yarn add react-player -E
```

# CSS <a name="css" />
Tailwind will enforce strict css rules.

## Avoid Inline Styles

Inline styling should only be used when absolutely necessary. I.E. elements that need to be dynamically positioned or images that need to be displayed using background-image attribute.

## Mobile First
* Plan your responsive styling mobile-first.
* Avoid one-off media queries that handle responsiveness in the opposite direction!
  (We have/had a lot of this logic in the past and removing it over time)
* Utilize [containers queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries) whenever possible.

## Media Queries

Should you need to use more generic media queries, make sure to modularize them. Avoid wrapping multiple modules in a single media query. This makes for confusion and hurts the maintainability of the code. (TODO: Is there a negative performance impact from this?)

## Grid System
Can we use a grid system?

---

# Javascript <a name="javascript" />

Utilize React-router and React's updating functionality to initiate state changes. This will make debugging easier.

Read information regarding React performance best practices here:
* https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab
*  https://reactjs.org/docs/reconciliation.html

Include a default export, unless the file is acting as a library or namespace.

Avoid long hard to parse conditional constructs.
```
const whoKnows = (people && (time || thought)) ? fun : yell && fight || eat;
```

Declare local variables close to the point they are first used, to focus their scope and improve readability.

Garbage collect, clear all event listeners, and stop all timers when transitioning to new route.

## A11y <a name="a11y" />

Accessibility should always be considered.

* Use native controls. For instance, instead of using a <div> for clickable elements use a <button>
* Apply appropriate [Aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) tags.
* Apply appropriate tabindex ordering, but prioritize default ordering.
* Order dom elements so that tabbing naturally makes sense.
* Always have a :focus style on elements that are tabbable.
* Utilize devtools "lighthouse" tool to test a11y.

Useful links:
* https://www.w3.org/TR/wai-aria-practices-1.1/
* https://a11yproject.com
* https://github.com/dequelabs/axe-core/blob/develop/doc/rule-proposal.md
* Axe Plugin: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en

## Commenting

The goal of comments should be to provide guidance to reader, if the meaning of a block of code is difficult to understand.
The developer should strive to write code that is understandable without the need for comments, but if certain logic is difficult to understand then please add comments.

Following the guidelines listed above will alleviate a lot of the need to write comments.

If the reason behind a class, method or property isn’t clear, consider breaking it up into smaller more easily understood blocks.

### JSDoc
[JSDoc](https://goo.gl/KW2pbX)
All classes should include a jsdoc description, including purpose of class, parameters, and example of usage if appropriate.

All public class methods should include jsdoc comments, including purpose of method, description of parameters, and usage example if appropriate.

All non-public functions/methods, whose purpose may be unclear, should:
1. be refactored into smaller more easily understood functions, or
2. commented so that the next develop knows their purpose.

## TODOs
When you find something that looks like it needs to be fixed, but is outside of the scope of your current ticket either:
1. Create a chore or bug fix ticket to address the issue. Preferred.
2. Add a "TODO" in comment with explanation of what the problem is.

When you are in a ticket and come across a TODO: that IS in scope of your ticket. Please try to address it.

Always try to avoid altering files outside the scope of your current ticket!

---

# HTTP Services <a name="services" />
We will use react-query for http requests. Patterns need to be established.

---
# Testing <a name="testing" />
## Testing Ids for e2e testing
All UI elements that are interactive, ie will need to be accessed by regression tests, should have a unique id associated with it.

Because ids are unique they should use PascalCase naming convention:

Example: ```<input id=”QuizAnswerItem1” />```

When a ticket is submitted to QA all relevant element ids should be added as a comment to the related ticket.

## Unit Tests
We are writing our tests using the [Vitest](https://vitest.dev/) which has an api that is "[Jest](https://jestjs.io/en/) compatible".

Avoid using snapshot tests except in hyper targetted way, for instance, the output is a single div with maybe a few child elements.
Snapshot tests that contain giant structures are next to useless - no one will check them.

