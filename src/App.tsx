import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Welcome to UD CISC275 with React Hooks and TypeScript
                    Mianmian Bao
                </h1>
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div>Hello World</div>
            <ol>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C language</li>
            </ol>
            <div>
                <img src="/homepage/logo192.png" alt="logo image" />
            </div>
            <div style={{ display: "flex", gap: "250px", marginTop: "20px" }}>
                <div
                    style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                />
                <div
                    style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                />
                <div
                    style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                />
            </div>
        </div>
    );
}

export default App;
