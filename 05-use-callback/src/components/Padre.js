import Hijo from "./Hijo";
import { useCallback, useState } from 'react';

export default function Padre() {

  const numeros = [2,4,6,8,10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
      ( num ) => {
          setValor( (oldValue) => oldValue + num )
      },
    [],
  );

  return (
   <>
   <h1>Padre</h1>
        <p> Total: { valor } </p>
        <hr />
        {/* <Hijo /> */}
        {
            numeros.map( n => (
                <Hijo 
                    key={ n }
                    numero={ n }
                    incrementar={ incrementar }
                />
            ))
        }
   </>
  );
}
