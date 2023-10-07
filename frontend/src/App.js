import './App.css';
import {useEffect, useState} from "react";
import {io} from "socket.io-client";

const socket = io.connect('https://blocktrader.pro');

function App() {

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        // socket.on('message', (message) => {
        //
        //     console.log(message, 'messages')
        //     // Do something with the message.
        // });
        socket.on('webhook', (webhook) => {
            setMessages((prev) => {
                return [...prev, webhook]
            })
            console.log(webhook, 'webhook')
        });
    }, []);

    return (<div className="App">
        hello from front end url changes
        {messages && messages.length > 0 &&
            messages.map((item, index) => {
                    return <p key={index}>{JSON.stringify(item)}</p>
                }
            )}
    </div>);
}

export default App;
