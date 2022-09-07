import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer (props) {
    const {items} = props;
    
    return <div>
        {items.map((productoUnitario) => {
      return(
        <li>
          {productoUnitario}
        </li>
      )
    })}
    </div>
}
