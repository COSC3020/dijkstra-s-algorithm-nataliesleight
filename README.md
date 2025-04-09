# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

My runtime complexity is very similar to that of the one shown in the slides. I used an adjacency matrix as my graph. The complexity is $\Theta(|V|^2)$.

To create the array that will hold all of the distance values takes V time because it loops from 0 to the number of vertices (where V is the number of vertices in the graph). 

Next, the while loop will run up to V times as a separate value is turned true in each iteration until there are no more false values left.

Within this while loop is a for loop that loops from 0 to the number of vertices, V times. Past this for loop is another one that also runs V times. 

Finally outside of the while loop near the end of the function, a new array is created to only hold the distance values which also runs V times.

Thus the runtime equation is $O(|V| + |V| * (|V| + |V|) + |V|) = O(|V|^2)$.

### Sources
I used this link to help me visualize what the Dijkstra's Algorithm does: https://www.w3schools.com/dsa/dsa_algo_graphs_dijkstra.php 

My main source was the lecture video by Lars Kothoff about Dijkstra's Algorithm: https://www.youtube.com/watch?v=90QjDpLkf0I 

I used this link to learn about the Infinity keyword in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity 

For the test code I received some help from Noah Vogt and used ChatGPT to generate graphs to use for testing. The prompts I used to generate the graphs were "I am using Dijkstra's Algorithm to find the shortest paths in a graph in JavaScript. Give me 5 graphs as adjacency matrices that would be good to test my code. Have one be 3 by 3, two be 4 by 4, and one be 5 by 5. Also give a source node for each graph and an array that holds the shortest path to each node that Dijkstra's Algorithm would give" and "Please keep these same graphs but use a random node as the source node. Still return the distance arrays"

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
