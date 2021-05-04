import React from 'react';

const Primeiro = (props) => {
    return (
        //? First way to return more than one elemente
        <React.Fragment>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>

        //? Second way to return more than one elemente
        // <>
        //     <h1>Primeiro Componente</h1>
        //     <h2>Exemplo de um componente React</h2>
        // </>
    )
}

export default Primeiro;