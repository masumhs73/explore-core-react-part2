import { useState } from "react"

export default function Batsman () {

    const [runs, setRuns] = useState(0);

    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleDoubles = () => {
        const updatedRuns = runs + 2;
        setRuns(updatedRuns);
    }

    const handleTriples = () => {
        const updatedRuns = runs + 3;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updatedRuns);
    }

    const batsmanStyle = {
        border: "2px solid yellow",
        marginBottom: "20px",
        borderRadius: "10px",
        padding: "10px"
    }
    return (
        <div style={batsmanStyle}>
            <h2>Bangladeshi Player</h2>
            <p>Six: {sixes}</p>
            {
                runs > 50 && <p>You score: 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDoubles}>Double</button>
            <button onClick={handleTriples}>Triple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}