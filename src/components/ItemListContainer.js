import { responsiveFontSizes } from "@mui/material";
import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProductos} from "./Promesa"
import { useState } from 'react';

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    getProductos()
    .then((response) => {
        console.log(response)
        setItems(response)
    })
    return (
        <div className="container">
        <ItemList items={items}/>
    </div>
    )
}
export default ItemListContainer
