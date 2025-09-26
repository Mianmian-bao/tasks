import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "New Year"
    | "Spring Festival"
    | "Labor Day"
    | "Thanksgiving"
    | "Christmas";

export const emoji: Record<Holiday, string> = {
    "New Year": "🎇",
    "Spring Festival": "🧧",
    "Labor Day": "🛠️",
    Thanksgiving: "🍽️",
    Christmas: "🎄",
};
export const byYear: Record<Holiday, Holiday> = {
    "New Year": "Spring Festival",
    "Spring Festival": "Labor Day",
    "Labor Day": "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New Year",
};
export const byAlphabet: Record<Holiday, Holiday> = {
    Christmas: "Labor Day",
    "Labor Day": "New Year",
    "New Year": "Spring Festival",
    "Spring Festival": "Thanksgiving",
    Thanksgiving: "Christmas",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Year");
    return (
        <div>
            <div>Holiday: {emoji[holiday]}</div>
            <Button
                onClick={() => {
                    setHoliday(byAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(byYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
