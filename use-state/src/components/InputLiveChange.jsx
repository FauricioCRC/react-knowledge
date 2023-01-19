import { useState } from "react";

export default function InputLiveChange () {
    const [valor, setValor] = useState("Hola!")
    
    function handleValue(e){
        setValor(e.target.value)
    }

    return (
        <>
            <input type="text" name="prueba" id="prueba" value={valor} onChange={(e) => {handleValue(e)}}/>
            <p>El valor es: {valor}</p>
            <button type="button" onClick={() => setValor("Hola!")}>Reset</button>
        </>
    )
}