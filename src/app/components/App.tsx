import * as React from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const App = ({}) => {
    const onFake = () => {
        parent.postMessage({pluginMessage: {type: 'fake-data'}}, '*');
    };
    const onCancel = () => {
        parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
    };

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const {type, message} = event.data.pluginMessage;
            if (type === 'fake-message') {
                console.log(`Figma Says: ${message}`);
            }
        };
    }, []);

    return (
        <div>
            <img src={require('../assets/logo.svg')} />
            <h2>Figma Faker</h2>
            <button id="fake" onClick={onFake}>
                Fake
            </button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default App;
