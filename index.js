function depthFirstSearch(rootNode, vertices, edges) {
  // LIFO push to end, pop from end
  let nodeStack = [rootNode]
  let orderList = []
  while (nodeStack.length !== 0) {
    let nextNode = nodeStack.pop()
    orderList.push(nextNode)
    if (!nextNode.discovered) {
      nextNode.discovered = true
      for (let edge of edges) {
        if (edge[0] === rootNode.name) {
          nodeStack.push(edge[1])
        } else if (edge[1] === rootNode.name) {
          nodeStack.push(edge[0])
        }
      }
    }
  }
  return orderList
}
