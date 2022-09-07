import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const productos = [
        {"id":1 , "nombre": "Aros verdes" , "imagen" : "arosverdes.png" , "descripcion": "Colección Primavera 2022" , "precio": 15000 , "stock" : 4},
        {"id":2 , "nombre": "Collar azul" , "imagen" : "collarazul.png" , "descripcion": "Colección Primavera 2022" , "precio": 18000 , "stock" : 5},
    ];
    return (
        <div className="container">
        <ItemList items={productos}/>
    </div>
    )
}
export default ItemListContainer
