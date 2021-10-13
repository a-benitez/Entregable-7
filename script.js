//Tomé como referencia el tp número 6
//
//
//Creación de los elementos INPUT desde JS
    const nodo = document.createElement("input");
    nodo.setAttribute("id", "producto");
    nodo.setAttribute("placeholder", "Ingrese producto");
    document.getElementById("formulario").appendChild(nodo);

    const nodo1 = document.createElement("input");
    nodo1.setAttribute("id", "precio");
    nodo1.setAttribute("placeholder", "Ingrese precio");
    document.getElementById("formulario").appendChild(nodo1);

//Creación del objeto producto
    class Item {
        constructor({nombre, precio}) {
            this.name  = nombre;
            this.price  = Number(precio);
        }
    }

//Crear funciones para guardar los datos ingresados por formulario
    const saveInfoProducto = () => {
        const productoNuevo = new Item ({
            nombre: document.getElementById("producto").value,
            precio: document.getElementById("precio").value,
        })
        return productoNuevo;
    }

//Declaración del array vacío (con corchetes)
    let elementos = [];

//Método push para agregar ítems y precio por formulario    
    elementos.push(new Item (saveInfoProducto));
    console.log(saveInfoProducto());





























