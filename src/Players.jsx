// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"


// export default function Players () {
//     const [players, setPlayers] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setPlayers(data));
//     }, [])
//     return (
//         <div className="card">
//             <h3>Players: {players.length}</h3>
//             <ol>
//                 {
//                     players.map(player => <li>{player.name}</li>)
//                 }
//             </ol>
//         </div>
//     )
// }

export default function Players () {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data));
    },[])
    return (
        <div className="card">
        <h3>Players: {players.length}</h3>
        <ol>
            {
                players.map(player =><li>{player.name}</li>)
            }
        </ol>
        </div>
    )
}


/**
 * 1. Event trigger
 * 2. State
 * 3. Data load from API
 * 4. loop through to display data
 * 5. why we use key prop
 */