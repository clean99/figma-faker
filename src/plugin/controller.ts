import { fakeColor, fakeText, nodesTraverserGenerator } from "./utils/traversalUtils";

figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
    if (msg.type === 'fake-data') {
        // fake text and color
        const currentNode = figma.currentPage.selection;
        const traverser = nodesTraverserGenerator(currentNode);
        console.log(currentNode,traverser)
        traverser.traverseNodes('TEXT',fakeText).traverseNodes('RECTANGLE',fakeColor)
        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: 'fake-data',
            message: `Fake data success`,
        });
    }
};
