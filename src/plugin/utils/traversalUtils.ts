import { MAX_COLLISION_TEST_TIMES } from "../constants/constants";
import { clone, isCollision } from "./commonUtils";
import { getRandomCoordinate, getRandomFloat, getRandomString } from "./randomUtils";

export const nodesTraverserGenerator = (nodes:readonly SceneNode[]) => {
  // return a traverser for modify particular type nodes
  return {
    nodes,
    traverseFirstLayer(type:string,method:Function,...args){
      // traverse first layer only
      function traverse(node:SceneNode){
        if (node.type === type) {
          method(node,...args);
        }
      }
      for (const node of this.nodes) {
        traverse(node);
      }
      return this;
    },
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
  const fills = clone(node.fills)
  if(!fills[0]?.color) return;
  fills[0].color.r = getRandomFloat();
  fills[0].color.g = getRandomFloat();
  fills[0].color.b = getRandomFloat();
  return node.fills = fills;
}

export const fakeCoordinate = (node:FrameNode|GroupNode) => {
  const children: readonly SceneNode[] = node.children;
  const maxX = node.width;
  const maxY = node.height;
  const resChildren:SceneNode[] = [];
  children.forEach(item=>{
    const itemRact = {
      x:item.x,
      y:item.y,
      w:item.width,
      h:item.height
    }
    let i = 0;
    while(i < MAX_COLLISION_TEST_TIMES){
      // loop 10 time for get non collision coordinate, if can't, break.
      i++;
      const tempCoordinate = getRandomCoordinate(maxX-itemRact.w,maxY-itemRact.h)
      let flag = false; // is collision?
      for(const newChild of resChildren){
        const newChildRact = {
          x:newChild.x,
          y:newChild.y,
          w:newChild.width,
          h:newChild.height
        }
        if(isCollision(newChildRact,{...itemRact,x:tempCoordinate[0],y:tempCoordinate[1]})){
          flag = true;
          break;
        }
      }
      if(!flag){
        // if there is no collision use the coordinate
        item.x = tempCoordinate[0]
        item.y = tempCoordinate[1]
        resChildren.push(item)
        break;
      }
    }
  });
}