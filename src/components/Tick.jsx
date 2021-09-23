import { useState, useEffect } from "react"


export default function Tick() {
    const [timenow, setTimenow] = useState("")

    useEffect(() => {
        setInterval(() => {
            setTimenow(new Date().toLocaleTimeString())
        }, 1000)
    }, [])


    return (
        <div>
            <h2>It is {timenow}</h2>
        </div>
    )
}