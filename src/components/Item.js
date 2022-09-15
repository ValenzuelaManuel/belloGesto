import { ImportExport } from "@mui/icons-material";
import React from "react";
import ItemCount from "./ItemCount";
import Button from '@mui/material/Button';
import ItemDetailContainer from "./ItemDetailContainer";

const Item = (props) => {
    const verDetalles = (event) => {
        <ItemDetailContainer/>
        console.log(event.currentTarget.id);
      };
    return (
        <div className="container col-md-4 py-3" style={{ width: '15rem'}}>
            <div className="card">
                <img src={props.imagen} alt=""></img>
                <div className="card-body">
                    <h2 className="card-title text-center">{props.nombre}</h2> 
                    <h4 className="card-title text-center">{props.precio}</h4>   
                    <ItemCount initial={1} stockInicial={props.stock} onAdd={0}/> 
                    <div className="text-center">
                        <Button id={props.id}
                            onClick={() => verDetalles()}>Ver detalles
                        </Button>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default Item;