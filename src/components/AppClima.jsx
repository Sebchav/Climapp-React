import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"

const AppClima = () => {

  const { resultado, cargando, noResultados } = useClima();

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            {cargando ? <Spinner/> : 
            resultado?.name ? <Resultado /> : noResultados ? <p>{noResultados}</p>
            : <p>El Clima se va a mostrar aquí</p> }
            
        </main>
    </>
  )
}

export default AppClima