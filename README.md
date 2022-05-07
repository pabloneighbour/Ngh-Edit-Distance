# Ngh-Edit-Distance

A simple function that calculates the edit distance distance between two strings.

## Installation

```bash
npm i Ngh-Edit-Distance 
```

## Basic usage

```javascript
const editDistance = require('Ngh-Edit-Distance');

let  str = "horse";
let str2 = "ros";

console.log(editDistance(str, str2)) //3
```

## Show matrix
Displays on console the Levenshtein distance algorithm matrix
```javascript
const editDistance = require('Ngh-Edit-Distance');

let  str = "horse";
let str2 = "ros";

console.log(editDistance(str, str2, true)) //3
```