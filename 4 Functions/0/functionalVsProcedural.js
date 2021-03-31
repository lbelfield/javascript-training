// Functional programming style VS Procedural programming style
// JavaScript is a functional programming language. 
// It gives you API functions (like filter(), map(), reduce() etc) and the ability to pipe these functions.

// API Functions are good at:
// Readability :thumbs-up: vs Performance :thumbs-down:

// If iterating over hundreds-of-thousands of items, then performance is hit significantly.
// Therefore, it is important to know your data set.

// Basically a toss up between readability and performance.

// Below is a for loop vs foreach loop vs reduce:
// https://www.measurethat.net/Benchmarks/Show/2472/0/arrayreduce-vs-for-loop-vs-arrayforeach#latest_results_block
// 1. The for loop: 1,014,783.0 Ops/sec
// 2. The forEach loop: 462,350.2 Ops/sec
// 3. The reduce: 56,819.9 Ops/sec

// For loop did over 2x more operations than foreach loop, and nearly 18x more than reduce

