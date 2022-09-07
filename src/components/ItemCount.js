import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


const ItemCount = ({initial, stockInicial }) => {
    const [qty, setQty] = useState(initial);
    const addProduct = (num) => {
      setQty(qty + num);
    };
    const [stock, setStock] = useState(stockInicial);
    const onAdd = (qty, stockInicial) => {
        alert(`Agregaste ${qty} productos`);
        setStock (stockInicial - qty);  
      };
    return (
        <div style={{ display: "block", padding: 30 }}>
        <div>
        <Badge color="secondary" badgeContent={qty}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
                    onClick={() => addProduct(-1)}
                    disabled={qty === initial}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => addProduct(+1)}
            disabled={qty === stockInicial}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>

      
        <Button variant="contained"
          onClick={() => {
            onAdd(qty);
          }}
          disabled={stock === 0 ? true : null}
        >
          Agregar al carrito
        </Button>
      </div>
      </div>
    );
  };
  
  export default ItemCount;