import { fakeColor, fakeCoordinate, fakeText, nodesTraverserGenerator } from "./utils/traversalUtils";

figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
    if (msg.type === 'fake-text') {
        // fake text and color
        const currentNode = figma.currentPage.selection;
        const traverser = nodesTraverserGenerator(currentNode);
        traverser.traverseNodes('TEXT',fakeText)
        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: 'fake-data',
            message: `Fake data success`,
        });
    }
    if (msg.type === 'fake-color') {
        // fake text and color
        const currentNode = figma.currentPage.selection;
        const traverser = nodesTraverserGenerator(currentNode);
        traverser.traverseNodes('RECTANGLE',fakeColor)
        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: 'fake-data',
            message: `Fake data success`,
        });
    }
    if (msg.type === 'fake-coordinate') {
        // fake text and color
        const currentNode = figma.currentPage.selection;
        const traverser = nodesTraverserGenerator(currentNode);
        traverser.traverseFirstLayer('FRAME',fakeCoordinate).traverseFirstLayer('GROUP',fakeCoordinate)
        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: 'fake-data',
            message: `Fake data success`,
        });
    }
};

