import { useState } from "react";

function contador() {

    const [contador, setContador] = useState(0); // inicia o contador com valor 0

    const incrementar = () => {
        setContador(contador + 1);
    }

    return (
        <div>
            <h1>contador: {contador}</h1>
            <button onClick= {incrementar}>incrementar</button>
        </div>
    );


};

export default contador;

