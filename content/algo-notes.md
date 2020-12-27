# Algorithm Notes

## Graph Representation

### Adjacency Matrix

#### Advantages
Vertical bars mean cardinality (size)

* Checking a connection or if an edge exists takes O(1) time

#### Disadvantages
* Finding neighbors/adjacents takes O(|V|) time
* Adjacency matrix always takes up O(|V|^2) space

### Adjacency List

#### Advantages
* Less space wasted O(|E| + |V|) space complexity
* Finding all adjacents/neighbors takes O(|E|)?

#### Disadvantages
* Checking a connection (if edge exists) takes O(|E|) 

## Master Theorem

