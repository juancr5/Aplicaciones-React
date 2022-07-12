import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

const BreakingBad = () => {

  //Variable conatdor
  const { counter, increment } = useCounter(1);
  //Desestructuracion del la Data traida del useFetch
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  //Asignacion de la data si esta tiene informacion condicional con &&
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? <div className="alert alert-info text-center">Loading...</div>
          :
          <blockquote className="blockquote text-end">
            <p className="mb-3" style={{ fontSize: '1.8em' }}>{quote}</p>
            <footer className="blockquote-footer" style={{ fontSize: '1em' }}>
              {author}
            </footer>
          </blockquote>
      }

      <button
        className="btn btn-primary"
        disabled={isLoading}
        style={{ fontSize: '1.5em' }}
        onClick={() => increment()}>
        Next Quote
      </button>

    </>
  );
}

export default BreakingBad;
