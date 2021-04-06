---
title: "Data Structures"
publishdate: 2021-04-06
lastmod: 2021-04-06
draft: false
toc: true
tags:
  - notes
  - college
  - data structures
---

## Graphs
* Notes based on slides from the "Data Structures Abstraction and Design Using Java" book  

Some Graph Algorithms are of the form:

```
1. for each vertex u in the graph:
2.   for each vertex v adjacent to u
3.     do something with edge(u, v)
```
* For adjacency list
  * Step 1 is $O(|V|)$
  * Step 2 is $O(|E_U|)$
  * Combination of Steps 1 and 2 represents examining each edge in the graph, giving $O(|E|)$

* For adjacency matrices
  * Step 1 is $O(|V|)$
  * Step 2 is $O(|V|)$
  * Combination of Steps 1 and 2 give $O(|V|^2)$

Other graphs algorithms are of the form:
```
1. for each vertex u in some subset of the vertices
2.   for each vertex v in some subset of the vertices
3.     if (u, v) is an edge
4.       do something with edge(u, v)
```
* Adjacency List:
  * Step 3 searches a list and is $O(|E_u|)$
  * Step 2 and 3 take $O(|E|)$
  * The overall algo is $O(|V||E|)$
* Adjacency Matrix:
  * Step 3 is just $O(1)$
  * Overall is just $O(|V|^2)$


* Adjacency matrix is better for dense graphs
* Adjacency list is better for sparse graphs
* Break-even point: If adjacency matrix is filled 25%

### Breadth First Search
* Identified = put in queue and marked as known to exist, but not yet processed/visited
* Visited = Done processing
* Unknown = Not yet known to exist in graph
```
Take arbitrary start vertex and mark as identified and put in queue
while the queue is not empty
  take a vertex, u, out of the queue and visit u
  for all vertices, v, adjacent to the vertex u
    if v has not been identified or visited
      mark it identified
      insert v into the queue
  we are now finished visiting u, so mark u as visited
```
* Adjacency List: $O(|E| + |V|)$ since you're visiting all edges and vertices.
* Adjacency Matrix: $O(|V|^2)$ since you have to check every vertex to find an edge.

### Depth First Search
* Discover order list: Order of visited nodes
* Finish order list: Order that vertices are finished (backtrack/return)
```
Mark the current vertex, u, visited, and put it in discover order list
for each vertex, v, adjacent to the current vertex, u
  if v has not been visited
    set parent of v to u
    recursively apply this algorithm starting at v
mark u finished and enter u into the finish order list
```
* Also $O(|E| + |V|)$ for adjacency lists.
* Also $O(|V|^2)$ for adjacency matrices.
