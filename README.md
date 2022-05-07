# Ngh-Edit-Distance

A simple function that calculates the edit distance distance between two strings.

## Installation

```bash
npm i ngh-edit-distance 
```

## Basic usage

```javascript
const editDistance = require('ngh-edit-distance');

let  str = "horse";
let str2 = "ros";

console.log(editDistance(str, str2)) //3
```

## Show matrix
Displays on console the Levenshtein distance algorithm matrix
```javascript
const editDistance = require('ngh-edit-distance');

let  str = "horse";
let str2 = "ros";

console.log(editDistance(str, str2, true)) //3
```