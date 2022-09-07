import React from "react";

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
