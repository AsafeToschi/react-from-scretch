import React from 'react';
import Card from './components/layouts/Card';

import Primeiro from './components/Primeiro';
import ComParametros from './components/ComParametros';
import ComFilhos from './components/ComFilhos';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIF from './components/CondicionalComIF';
import IncrementNumber from './components/IncrementNumber';

import './App.css';

const App = () => {
    return (
        <div className="App">
            
            <Card title="{#07 - Working with states (Function)">
                <IncrementNumber 
                    num={20}
                    step={1}
                />
            </Card>

            <Card title="#06 - Condicional com componente IF">
                <CondicionalComIF number={354}></CondicionalComIF>
            </Card>

            <Card title="#05 - Condicional dentro de componente">
                <Condicional number={153}></Condicional>
            </Card>

            <Card title="#04 - Repetição dentro de componente">
                <Repeticao></Repeticao>
            </Card>

            <Card title="#03 - Componente com filhos">
                <ComFilhos>
                    <ul>
                        <li>Fernando</li>
                        <li>Bia</li>
                        <li>Matheus</li>
                        <li>Ana</li>
                        <li>Carlos</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card title="#02 - Componente com parametros">
                <ComParametros title="Componente com parametros" content="Nesse componente colocamos parametros na chamada do componente"></ComParametros>
            </Card>

            <Card title="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>



            
        </div>
    )
}

export default App;
