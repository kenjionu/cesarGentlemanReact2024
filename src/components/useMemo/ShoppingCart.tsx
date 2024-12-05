// objetivo 1: memorizar crear un cache el resultado de ejecutar una funcion esto lo hacemos para evitar que se vuelva a ejecutar el metodo
// objetivo 2: Esto es una funcion costosa y queremos evitar que se vuelva a ejecutar
// objetivo 3: evitar recalculos innecesarios
// objetivo 4: evitar renderizados innecesarios
// contorlar si el beneficio de memorizarlo es superior al de recalcularlo
// por que? porque es mas costoso en memoria

import { useMemo, useState } from "react";

//Ejemplo:
//TEnemos una lista de compras y queremos calcular el total de la compra
// Si no agregamosn nada ni tampoco cambio nada, cual es el costo total?

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart =() => {
    const [items, setItems] = useState<Item[]>([{
        id: 1,
        name: 'Manzana',
        price: 1.5,
    },
    {
        id: 2,
        name: 'Banana',
        price: 2.0,
    },
    {
        id: 3,
        name: 'Cereza',
        price: 1.0,
    }
]);

    const [discount, setDiscount] = useState<number>(0);
    
    const totalCost = useMemo(() => 
        items.reduce((total, item)=> total + item.price, 0), [items])

    const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

    const addItem = () => {
    const newItem = {
        id: items.length + 1,
        name: `Producto ${items.length + 1}`,
        price: Math.random() * 5
    }
    setItems([...items, newItem]);
    
  
    }

    return(
        <div>
            <h2>Lista de compras</h2>
            <ul>
               {items.map((item: Item) => (
                <li key={item.id}>
                    {item.name}: {item.price.toFixed(2)} 
                </li>
               ))
               } 
            </ul>
            <p>Costo total: ${totalCost.toFixed(2)}</p>
            <p>
            Descuento:
            <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />
            </p>
            <p>Costo final: ${finalCost.toFixed(2)}</p>

            <button onClick={addItem}>Agregar Producto</button>
        </div>
    )
}


