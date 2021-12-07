---
layout: page
title: time complexity
subtitle: is it fast enough?
---

## table of contents
- [calculation rules](#calculation-rules)
	- [loops](#loops)
	- [phases](#phases)
	- [variables](#variables)
	- [recursion](#recursion)
- [complexity classes](#complexity-classes)
- [efficiency estimation](#efficiency-estimation)

<hr>

## calculation rules
the **time complexity** of an algorithm is denoted $O(\dots)$. the variable $n$ denotes input size.


### loops
the efficiency of an algorithm has an impact on the speed of an algorithm. if an algorithm contains several nested loops, it typically has to perform more operations, slowing down the algorithm. **hence, the more the number of nested loops, the slower the algorithm.** if there are $k$ nested loops, then the time complexity is $O(n^k)$.

for example, the time complexity of the following code is $O(n)$.
```cpp
for (int i = 0; i < n; i++) {
	// code
}
```

the time complexity of the following is $O(n^2)$.
```cpp
for (int i = 0; i < n; i++) {
	for (int j = 0; j < n; j++) {
		// code
	}
}
```

a common misconception is that the time complexity of an algorithm tells us the exact time that the algorithm takes to run. this is false, as **the time complexity only tells us the order of magnitude** rather than the number of operations executed.

for example, the following code is executed $2n$ times, but only has a time complexity of $O(n)$.
```cpp
for (int i = 0; i < 2*n; i++) {
	// code
}
```


### phases
a phase is a loop that is not nested within another loop.

if the algorithm consists of several phases that have differing time complexities, then **the total time complexity of the algorithm is the largest time complexity out of all the phases.**

for example, the following code consists of 3 phases with time complexities $O(n), O(n^2),$ and $O(n)$. hence, the total time complexity is $O(n^2)$ as it is the largest complexity out of all 3.
```cpp
for (int i = 0; i < n; i++) {
	// code
}

for (int i = 0; i < n; i++) {
	for (int j = 1; j < n; j++) {
		// code
	}
}

for (int i = 0; i < n; i++) {
	// code
}
```


### variables
if nested loops depend on several different variables, the total time complexity can contain several variables.

for example, the time complexity of the following code is $O(nm)$.
```cpp
for (int i = 0; i < n; i++) {
	for (int j = 0; j < m; j++) {
		// code
	}
}
```



### recursion
the time complexity of a recursive function depends on the number of times the function is called and the time complexity of a single call. the total time complexity is the product of these values.

for example, the following function will result in $O(n)$ time complexity.
```cpp
void f(int n) {
	if (n == 1) return;
	f(n-1);
}
```
this is because the call $f(n)$ causes $n$ function calls, and the time complexity of each call is $O(1)$. Hence, $O(1) * n = O(n)$.

<hr>


## complexity classes
as mentioned previously, different algorithms have different time complexities.

| **time complexity** | **description** | 
| --------------- | ----------- |
| $O(1)$ | a **constant-time** algorithm that does not depend on the input size. |
| $O(\log n)$ | A **logarithmic** algorithm that often halves the input size at each step. |
| $O(\sqrt{n})$ | A **square root** algorithm that is slower than $O(\log n)$ but faster than $O(n)$. |
| $O(n)$ | A **linear** algorithm that goes through the input a constant number of times. Usually considered the best possible time complexity. |
| $O(n \log n)$ | Likely an algorithm that **efficiently sorts the input.** Could also be an algorithm where an operation takes $O(\log n)$ time. |
| $O(n^2)$ | A **quadratic** algorithm that often contains two nested loops. |
| $O(n^3)$ | A **cubic** algorithm that often contains three nested loops. |
| $O(2^n)$ | Likely an algorithm that **iterates through all subsets** of the input elements. |
| $O(n!)$ | Likely an algorithm that **iterates through all permutations** of the input elements. | 

the table above takes a look at each time complexity and describes the algorithm that commonly possesses the aforementioned time complexity.
<hr>


## efficiency estimation
by calculating the time complexity of an algorithm, it is possible to check beforehand whether or not the algorithm will exceed the time limit.

modern computers are able to perform up to 100 million (or $10^8$) per second. hence, the total time complexity of an algorithm should be under 100 million.

| **input size**    | **required time complexity** |
| ------------- | ------------------------ |
| $n \leq 10$   | $O(n!)$                  |
| $n \leq 20$   | $O(2^n)$                 |
| $n \leq 500$  | $O(n^3)$                 |
| $n \leq 5000$ | $O(n^2)$                 |
| $n \leq 10^6$ | $O(n \log n)$ or $O(n)$  |
| $n$ is large  | $O(1)$ or $O(\log n)$    | 

for example, if the input size is $n = 10^5$, it is expected that the time complexity of the algorithm is $O(n)$ or $O(n \log n)$. 

