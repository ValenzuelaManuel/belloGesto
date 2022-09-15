import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    return (
        <div className="container col-md-4 py-3" style={{ width: '25rem'}}>
            <div className="card">
            <img src={item.imagen} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>
                    {item.descripcion}
                </p>
            <h3>${item.precio}.-</h3>

            <ItemCount stock={10} initial={1} />
            </div>
            </div>
        </div>
    )
}
export default ItemDetail