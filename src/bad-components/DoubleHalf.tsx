import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (newDhValue: number) => void;
}): React.JSX.Element {
    return (
        <div>
            <Button
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            >
                Double
            </Button>
            to {dhValue}
        </div>
    );
}

function Halver({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (newDhValue: number) => void;
}): React.JSX.Element {
    return (
        <div>
            <Button
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            >
                Halve
            </Button>
            to {dhValue}
        </div>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
