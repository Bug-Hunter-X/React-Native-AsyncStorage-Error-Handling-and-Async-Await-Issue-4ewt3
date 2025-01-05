# React Native AsyncStorage Bug and Solution

This repository demonstrates a common bug in React Native applications related to AsyncStorage and its handling of asynchronous operations. The bug involves improper error handling and the incorrect use of `await` outside an `async` function.

## Bug Description

The `bug.js` file contains code that attempts to retrieve data from AsyncStorage and access its properties without sufficient error checking. It also incorrectly uses `await` outside of an `async` function, leading to crashes. 

## Solution

The `bugSolution.js` file demonstrates how to fix this issue using proper error handling, `try...catch` blocks, and correctly placing `await` within an `async` function.  Null checks are also implemented to prevent crashes from accessing properties of potentially `null` objects.

## How to reproduce

1. Clone the repository
2. Navigate to the directory
3. Run `npx react-native run-android` or `npx react-native run-ios`
4. Observe the incorrect behavior in `bug.js` and correct behavior in `bugSolution.js`.