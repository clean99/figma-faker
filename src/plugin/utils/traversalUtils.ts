import { getRandomFloat, getRandomString } from "./randomUtils";

export const nodesTraverserGenerator = (nodes:readonly SceneNode[]) => {
  // return a traverser for modify particular type nodes
  return {
    nodes,
    traverseNodes(type:string,method:Function,...args) {
      function traverse(node:SceneNode){
        if (node.type === type) {
          method(node,...args);
        }
        if(node.type === 'FRAME'|| node.type === 'GROUP'){
          node.children.forEach(child=>traverse(child));
        }
      }
      for (const node of this.nodes) {
        traverse(node);
      }
      return this;
    }
  }
}

export const fakeText = async (node:TextNode) => {
  await figma.loadFontAsync(node.fontName as FontName);
  return node.characters = getRandomString(node.characters.length);
}

export const fakeColor = (node:RectangleNode) => {
  function clone(val) {
    return JSON.parse(JSON.stringify(val));
  }
  const fills = clone(node.fills)
  if(!fills[0]?.color) return;
  fills[0].color.r = getRandomFloat();
  fills[0].color.g = getRandomFloat();
  fills[0].color.b = getRandomFloat();
  return node.fills = fills;
}