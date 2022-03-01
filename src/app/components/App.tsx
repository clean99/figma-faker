import * as React from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const App = ({}) => {
    const onFakeText = () => {
        parent.postMessage({pluginMessage: {type: 'fake-text'}}, '*');
    };
    const onFakeColor = () => {
        parent.postMessage({pluginMessage: {type: 'fake-color'}}, '*');
    };
    const onFakeCoordinate = () => {
        parent.postMessage({pluginMessage: {type: 'fake-coordinate'}}, '*');
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
            if (type === 'photo-message') {
                console.log(`Figma Says: ${message}`);
            }
        };
    }, []);

    return (
        <div>
            <img src={require('../assets/logo.svg')} />
            <h2>Figma Faker</h2>
            <div className='button-group'>
            <button id="fake" onClick={onFakeText}>
                Fake Text
            </button>
            <button id="fake" onClick={onFakeColor}>
                Fake Color
            </button>
            <button id="fake" onClick={onFakeCoordinate}>
                Fake Coordinate
            </button>
            <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default App;
