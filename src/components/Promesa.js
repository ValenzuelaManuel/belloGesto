const productos = [
    {"id":1 , "nombre": "Aros verdes" , "imagen" : "arosverdes.png" , "descripcion": "Colección Primavera 2022" , "precio": 15000 , "stock" : 4},
    {"id":2 , "nombre": "Collar azul" , "imagen" : "collarazul.png" , "descripcion": "Colección Primavera 2022" , "precio": 18000 , "stock" : 5},
];

export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export default productos