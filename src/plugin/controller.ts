figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
    if (msg.type === 'fake-data') {
        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: 'fake-data',
            message: `Fake data success`,
        });
    }
    figma.closePlugin();
};
