import './App.css';
import {useEffect, useState} from "react";
import {io} from "socket.io-client";

const socket = io.connect('http://localhost:3001');

function App() {

    const [messages, setMessages] = useState(null);
    useEffect(() => {
        // fetch('http://localhost:3001/')
        //   .then(response => response.json())
        //   .then(data => console.log(data));

// Listen for messages from the server.
        socket.on('message', (message) => {
            setMessages(message)
            console.log(message, 'messages')
            // Do something with the message.
        });
    }, []);

    return (<div className="App">
            {messages && <p>{JSON.stringify(messages)}</p>}
        </div>);
}

export default App;
