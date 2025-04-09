function dijkstra(graph, sourceNode) {
    // adjacency matrix
    // graph is 2d array and sourcenode is an integer index
    if (graph.length == 0) {return [];}
    
    // create distance array
    var verNum = graph.length;
    var distArr = new Array(verNum);
    for (var i = 0; i < verNum; i++) {
        distArr[i] = [Infinity, false];
    }

    // make sourcenode distance zero
    distArr[sourceNode] = [0, false];

    // look through array for smallest key value
    var hasFalse = true;
    while (hasFalse == true) {
        hasFalse = false;
        var smallestValue = Infinity;
        for (var i = 0; i < verNum; i++) {
            var svIndex;
            if (distArr[i][1] == false) {
                hasFalse = true;
                if (distArr[i][0] < smallestValue) {
                    smallestValue = distArr[i][0];
                    svIndex = i;
                }
            }
        }
        if (smallestValue == Infinity) {
            for (var i = 0; i < verNum; i++) {
                if (distArr[i][0] == Infinity) {
                    distArr[i][1] = true;
                }
            } 
        }
        if (hasFalse == false) {break;}
        
        // set distance-true
        distArr[svIndex][1] = true;

        // look at all outgoing vertices/edges
        for (var i = 0; i < verNum; i++) {
            if (graph[svIndex][i] != 0) {                                           // looking through proper row, found edge connecting to i
                if (distArr[svIndex][0] + graph[svIndex][i] < distArr[i][0]) {      // if dist to first vertex plus dist to next vertex less than current dist
                    distArr[i][0] = distArr[svIndex][0] + graph[svIndex][i];
                }
            }
        }
    }

    // create single dimensional array to return
    var finalArr = new Array(verNum);
    for (var i = 0; i < verNum; i++) {
        finalArr[i] = distArr[i][0];
    }

    return finalArr;
}
