import Header from './components/header/header'
import Form from './components/form/form'
import Tabela from './components/tabela/tabela'
import './main.css'

function App() {


    return(
        <>
            <div className="container">
                <Header/>
                <Form/>
                <Tabela/>
            </div>
        </>
    )
}

export default App