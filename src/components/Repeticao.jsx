import React from 'react';
import produtos from '../data/products';

const Repepticao = () => {

    function getProdutosListItem() {
        var list = produtos.map(produto => (
            <li key={produto.id}> {produto.id} - {produto.name} - R${produto.price}</li>
        ));
        console.log(list)
        return list;
    }

    return (
        <div>
            <h3>Repetição</h3>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}

export default Repepticao;