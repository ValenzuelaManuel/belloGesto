import React from "react";
import ItemListContainer from "./ItemListContainer";

const Promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000);
});
Promesa.then(resultado=> {
    <ItemListContainer/>;
})

export default Promesa