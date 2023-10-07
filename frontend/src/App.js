import './App.css';
import {useEffect, useState} from "react";
import {io} from "socket.io-client";

const socket = io.connect('https://blocktrader.pro');

function App() {

    const [messages, setMessages] = useState(null);
    useEffect(() => {
        // fetch('http://localhost:3001/')
        //   .then(response => response.json())
        //   .then(data => console.log(data));

        socket.on('message', (message) => {
            setMessages(message)
            console.log(message, 'messages')
            // Do something with the message.
        });
        socket.on('webhook', (webhook) => {
            console.log(webhook, 'webhook')
        });
    }, []);

    return (<div className="App">
        hello from front end url changes
            {messages && <p>{JSON.stringify(messages)}</p>}
        </div>);
}

export default App;
