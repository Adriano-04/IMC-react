import { useState } from 'react'
import './tabela.css'

function Tabela() {
    const [estadoTabela, setEstadoTabela] = useState(false)

    return(
        <>
            {estadoTabela && (
                    <table>
                        <thead>
                            <tr>
                                <th>IMC</th>
                                <th>Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Menor de 18,5</td>
                                <td>Magreza</td>
                            </tr>
                            <tr>
                                <td>Maior de 18,5 menor 24,9</td>
                                <td>Normal</td>
                            </tr>
                            <tr>
                                <td>Maior de 24,9 menor 29,9</td>
                                <td>Sobrepeso</td>
                            </tr>
                            <tr>
                            <td>Maior de 29,9</td>
                                <td>Obesidade</td>
                            </tr>
                        </tbody>
                    </table>
            )}
            <div className='div-button'>
                <button className='table-toggle' onClick={() => setEstadoTabela(!estadoTabela)}>{estadoTabela ? 'Fechar tabela' : 'Mostrar tabela'}</button>
            </div>
        </>
    )
}

export default Tabela