import { useEffect, useState } from "react"
import './form.css'


function Form() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [resultado, setResultado] = useState(0)

    function cmParaMetros() {
        const resultado = altura / 100
        return resultado
    }

    useEffect(() => {
        const alturaMetros = cmParaMetros()
        const alturaMulti = alturaMetros * alturaMetros
        const IMC = peso / alturaMulti

        setResultado(IMC.toFixed(1))

    }, [altura, peso]) 

    return(
        <>
            <div className="form-container">
            <form>
                <label>Altura(cm)</label>
                <input type="number" placeholder=" ex: 1,80m = 180" onChange={evento => setAltura(Number(evento.target.value))}/>
                <label>Peso(kg)</label>
                <input type="number" placeholder="Peso" onChange={evento => setPeso(Number(evento.target.value))}/>
            </form>
            {resultado < 18.5 && resultado > 0 && <p className="abaixo">você está abaixo do peso ideal</p>}
            {resultado >= 18.5 && resultado < 24.9 && <p className="ideal">você está no peso ideal</p>}
            {resultado >= 24.9 && resultado < 29.9 && <p className="acima">você está acima do peso ideal</p>}
            {resultado >= 29.9 && <p className="muito-acima">você está muito acima do peso ideal</p>}
            {resultado > 0 && <p>Seu resultado foi: {resultado}</p>}
            </div>
        </>
    )

}

export default Form