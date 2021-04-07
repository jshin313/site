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

### Terminology
* **Simple**: No multiple edges, no loops, unweighted, and undirected
* **Connected**: All nodes have a path/edge to at least one other node/vertex
* **Acyclic**: No cycles
* **Directed**: Edges have directions

### Common Algorithms
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
$$\sum_{u=1}^{|V|} \left(\sum_{v=1}^{|E_u|} O(1)\right) = |E|$$

* For adjacency matrices
  * Step 1 is $O(|V|)$
  * Step 2 is $O(|V|)$
  * Combination of Steps 1 and 2 give $O(|V|^2)$
$$\sum_{u=1}^{|V|} \left(\sum_{v=1}^{|V|} O(1)\right) = |V|^2$$

Other graphs algorithms are of the form:
```
1. for each vertex u in some subset of the vertices
2.   for each vertex v in some subset of the vertices
3.     if (u, v) is an edge
4.       do something with edge(u, v)
```
* Adjacency List:
  * Step 3 searches a list and is $O(|E_v|)$
  * Step 2 and 3 take $O(|E|)$
  * The overall algo is $O(|V||E|)$
$$\sum_{u=1}^{|V|} \left(\sum_{v=1}^{|V|} \left(\sum_{v=1}^{|E_v|} O(1)\right)\right) = \sum_{u=1}^{|V|}|E| = |V|\cdot|E|$$
* Adjacency Matrix:
  * Step 3 is just $O(1)$
  * Overall is just $O(|V|^2)$
$$\sum_{u=1}^{|V|} \left(\sum_{v=1}^{|V|} O(1)\right) = \sum_{u=1}^{|V|}|V| = |V|^2$$


* An adjacency matrix is better for dense graphs
* Adjacency list is better for sparse graphs
* Break-even point: If adjacency matrix is filled 25%

### Breadth First Search
* Identified = put in queue and marked as known to exist, but not yet processed/visited
* Visited = Done processing
* Unknown = Not yet known to exist in graph  
* Can be used to find the shortest path for unweighted edges
```
1. Take arbitrary start vertex and mark as identified and put in queue
2. while the queue is not empty
3.   take a vertex, u, out of the queue and visit u
4.   for all vertices, v, adjacent to the vertex u
5.     if v has not been identified or visited
6.       mark it identified
7.       insert v into the queue
8.   we are now finished visiting u, so mark u as visited
```
#### Adjacency List 
* $O(|E| + |V|)$ since you're visiting all edges and vertices.
* The loop at 2. takes $O(|V|)$
* The loop at 4. takes $O(|E_u|)$  
  $$\sum\limits_{u=1}^{|V|} \left(\left(\sum\limits_{v=1}^{|E_u|} O(1)\right) + O(1)\right) = |V| \cdot( |E_u| \cdot O(1) + O(1)) = |V| \cdot |E_u| + |V| = |E| + |V|\\\\$$    
#### Adjacency Matrix
* $O(|V|^2)$ since you have to check every vertex to find an edge.  
* For adjacency matrices, step 4. takes $O(|V|)$ since looking for all adjacent vertices takes $O(|V|)$
  $$\sum\limits_{u=1}^{|V|} \left(\left(\sum\limits_{v=1}^{|V|} O(1)\right) + O(1)\right) = |V| \cdot( |V| \cdot O(1) + O(1)) = |V| \cdot |V| + |V| = |V|^2 + |V|$$    
  $$ = O(|V|^2)$$

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

* Probably better than bfs if you know what you're searching for is deeper in the graph from the starting point

### Dijkstra's Algorithm

* S: List with all the vertices that have been processed
* V-S: List with all the vertices that haven't been processed completely yet
* d: Set with the currently known minimum distance for a vertex from the start
* p: Set with the predecessor of the vertex to get to that vertex
```
    // Set up the V-S and S lists as well as the p[v] and d[v] sets
 1. Initialize S with the start vertex, s, with V-S with the remaining vertices
 2. for all v in V-S
 3.   Set p[v] to s
 4.   if there is an edge (s, v)
 5.     Set d[v] to w(s, v)
 6.   else
 7.     set d[v] to infinity
 8.   
 9. while V-S is not empty
10.   for all u in V-S, find the smallest d[u]
11.   Remove u from V-S and add u to S
12.   for all v adjacent to u
13.     if d[u] + w(u, v) is less than d[v]
14.       Set d[v] to d[u] + w(u, v)
15.       Set p[v] to u
```

* The line at 1. takes $|V|$ steps to go through each vertex and put them in either V-S or S
* The loop at 2. is executed $|V-1|$ times since all the vertexes except the start are in V-S
* The loop at 9. also takes $|V-1|$ for similar reasons as 2.
* Line 10. takes $O(|V|)$ to look through V-S
* Line 12. takes $O(|E_u)$ to look through the adjacent vertices

* Total time complexity of dijkstra's is $O(|V|^2)$
$$O(|V|) + O(|V|) + \left(\sum\limits_{u=1}^{|V|-1} \left(|V| + \sum\limits_{v=1}^{|E_u|} O(1) \right)\right) = 2\cdot O(|V|) + O(|V|^2) + O(|E|) $$
$$ = O(|V|^2)$$
Note that $O(|E|)$ is between $O(1)$ and $O(|V|^2)$, which is why $O(|V|^2) + O(|E|) = O(|V|^2)$.

### Topological Sort
If you have a DAG (Directed Acyclic Graph), you can find an ordering so that for every directed edge uv from vertex u to vertex v, u comes before v.   
Used for scheduling (e.g. class planning).
Note that more than one valid topological sort can exist for a DAG.

#### Kahn's Algorithm
* Finds a valid topological sort for a DAG
* Just copy pasted from Wikipedia: https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm   

First, find a list of "start nodes" which have no incoming edges and insert them into a set S; at least one such node must exist in a non-empty acyclic graph. Then:

```
L ← Empty list that will contain the sorted elements
S ← Set of all nodes with no incoming edge

while S is not empty do
    remove a node n from S
    add n to L
    for each node m with an edge e from n to m do
        remove edge e from the graph
        if m has no other incoming edges then
            insert m into S

if graph has edges then
    return error   (graph has at least one cycle)
else 
    return L   (a topologically sorted order)
```
If the graph is a DAG, a solution will be contained in the list L (the solution is not necessarily unique). Otherwise, the graph must have at least one cycle and therefore a topological sort is impossible.  

* Time complexity: $O(|V| + |E|)$
* Analysis is similar to breadth first search
