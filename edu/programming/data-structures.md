---
layout: page
title: data structures
subtitle: infinite dimensions, right in your IDE!
---

## vectors

in C++, a **vector** is an dynamic array type whose size can be changed during the execution of the program.

```cpp
// declaration
vector<int> v; // empty vector
vector<int> w = {6, 2, 8, 3, 11}; // vector with elements
vector<int> x(5); // vector with size 5
vector<int> y(5, 2); // vector with size 5, initial value 2

// operations
v.push_back(5): // adds an element to v
v.pop_back(); // removes the last element in v
sort(v.begin(), v.end()) // sort vector
sort(v.rbegin(), v.rend()) // reverse sort vector
reverse(v.begin(), v.end()) // also reverses vector
random_shuffle(v.begin(), v.end()) // randomly shuffles vector

// printing
vector<int> z = {2, 3, 5, 7};
cout << z[0] << endl; // 2
cout << z[2] << endl; // 5

for (int i = 0; i < z.size; i++) {
    cout << z[i] << endl; // prints all values in z
}

for (auto x: y) {
    cout << z[i] << endl; // does same as above but shorter, C++11 extension
}
```
<hr>

## sets
a **set** is a data structure that maintains a collection of elements. sets support element insertion, search, and removal, but elements within a set cannot be obtained using the `[]` notation.

alike a mathematical set, all elements within the set are **unique.**

```cpp
// declaration
set<int> s;
set<int> t = {1, 6, 8, 17};

// operations
s.insert(5); // {5}
s.insert(1); // {1, 5} // elements are sorted
s.insert(3); // {1, 3, 5}
s.insert(5); // {1, 3, 5} as all elements are unique
s.erase(3) // {1, 5}
cout << s.count(3); // 0
cout << s.count(5); // 1

// printing
for (auto x: s) {
    cout << x << endl; // prints all values in s
}
```
<hr>

## maps
a **map** is an array that consists of key-value pairs. 

```cpp
// declaration
map<string, int> m;
map<int, int> n;
m["apple"] = 5;
m["banana"] = 2;
n[5] = 1;

// printing
cout << m["apple"]; // 5
cout << n[5]; // 1
cout << n[3]; // 0, default value as key-value pair is non-existent
for (auto x: m) {
	cout << x.first << " " << x.second << endl; // prints key then value
}
```
<hr>

## deque
a **deque** is a dynamic array, much alike a vector. a deque allows the functions `push_back` and `pop_back`, but also allows the functions `push_front` and `pop_front`.

```cpp
// declaration
deque<int> d;

// operations
d.push_back(5); // [5]
d.push_back(1); // [5, 1]
d.push_front(8); // [8, 5, 1]
d.pop_back(); // [8, 5]
d.pop_front(); // [5]
```
<hr>

## stack
a **stack** is a data structure that only allows operations to be performed on the top (last) element of a stack.

```cpp
// declaration
stack<int> s;

// operations
s.push(5); // [5]
s.push(7); // [5, 7]
s.push(2); // [5, 7, 2]
s.pop(); // [5, 7]
cout << s.top(); // 7
```
<hr>

## queue
a **queue** allows the addition of an element to the end of the data structure, as well as the removal of the first element in the queue. only the first and last elements of a queue can be accessed.

```cpp
// declaration
queue<int> q;

// operations
q.push(5); // [5]
q.push(7); // [5, 7]
q.push(2); // [5, 7, 2]
q.pop(); // [5, 7]
cout << q.front(); // 5
```