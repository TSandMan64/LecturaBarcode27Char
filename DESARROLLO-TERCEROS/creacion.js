let contador = 0

function aumento()
{
 contador ++;
 document.getElementById("rowCount").innerHTML = contador
}

const productos = [
    { id: "TM000", nombre: "HUESO OVINO - CN", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "TM022", nombre: "DECOMISO ASERRIN DE OVINO - CN", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "14003", nombre: "DECOMISO RES ", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "TM059", nombre: "RECORTE DE CORDERO - CN", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "25282", nombre: "DECOMISO TERCEROS", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "25260", nombre: "DECOMISO DE TERCEROS", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "T0305", nombre: "CHAMORRO DE OVEJA - TF F CN", presentacion: "Botella 1L", unidad: "Caja x12" },
    { id: "T0310", nombre: "RACK FRANCÉS DE OVEJA - AV CN", presentacion: "Paquete 200g", unidad: "Caja x24" },
    { id: "TM000", nombre: "HUESO OVINO - CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM002", nombre: "DECOMISO ASERRIN DE OVINO - CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM037", nombre: "CHAMBARETE - TF F CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM044", nombre: "FILETE - TF CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM046", nombre: "LOMO DESHUESADO 2 PZ- TF CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM047", nombre: "MOLIDA DE CORDERO - TF CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM056", nombre: "RACK ESTANDAR - AV CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM058", nombre: "RACK FRANCES - AV CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM059", nombre: "RECORTE CORDERO - CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM066", nombre: "PIERNA SIN HUESO - ML AV CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM067", nombre: "RACK FRANCES W - AV ML CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM068", nombre: "RACK FRANCES 2 PZ - AV ML CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM069", nombre: "RACK FRANCES CAR 2 PZ - AV CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM071", nombre: "ESPALDILLA CUADRADA W-AV ML CN", presentacion: "Bolsa 500g", unidad: "Caja x10" },
    { id: "TM072", nombre: "PIERNA CORTA W - AV ML CN", presentacion: "Bolsa 500g", unidad: "Caja x10" }
];  

function agregaFila()
{
    let tabla = document.getElementById("detalle").getElementsByTagName("tbody")[0];
    let inputValor = document.getElementById("27char").value;
    let sku = inputValor.substring(18, 23);
    const producto = productos.find(p => p.id === sku);


    if (inputValor.trim() == "")
    {
        alert ("Por favor ingrese una etiqueta");
        return;
    }
    let nuevaFila = tabla.insertRow();

    let celda1 = nuevaFila.insertCell (0);
    let celda2 = nuevaFila.insertCell (1);
    let celda3 = nuevaFila.insertCell (2);
    let celda4 = nuevaFila.insertCell (3);
    let celda5 = nuevaFila.insertCell (4);
    let celda6 = nuevaFila.insertCell (5);
    let celda7 = nuevaFila.insertCell (6);
    let celda8 = nuevaFila.insertCell (7);
    let celda9 = nuevaFila.insertCell (8);

    celda1.innerHTML = inputValor;
    let lote = inputValor.substring(8,18 );
    celda2.innerHTML = lote;
    celda3.innerHTML = sku;
    if (producto == undefined)
    {
        celda4.innerHTML = "Producto carnico";
    }
    else
    {
    celda4.innerHTML = producto.nombre;
    }
    let kg = inputValor.substring(0,7);
    celda5.innerHTML = kg;
    celda6.innerHTML = "1";

    let ano = inputValor.substring(8,10);
    let mes = inputValor.substring(10,12);
    let dia = inputValor.substring(12,14);

    celda7.innerHTML = dia + "/" + mes + "/" + ano ;
    celda8.innerHTML = "XX/XX/XXXX";
    celda9.innerHTML = "XX/XX/XXXX";


    document.getElementById("27char").value = "";

    document.getElementById("27char").focus();

    aumento();
        
}

window.onload = function()
{
    document.getElementById("27char").focus();
}

function exportarExcel()
{
    let titulo = document.getElementById("nombre").innerText;
    let tabla = document.getElementById("detalle");
    let hoja = XLSX.utils.table_to_sheet(tabla);
    let libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Tabla");

    XLSX.writeFile(libro, titulo + ".xlsx");
}

function insertarH4 ()
{
    let input = document.getElementById("pedido")
    let np = input.value;

    if (np.trim() == "")
        {
            alert ("Por favor ingrese nombre del cliente + fecha de hoy");
            return;
        }

    document.getElementById("nombre").innerText = np;
    
    document.getElementById("pedido").value = "";

    document.getElementById("27char").focus();

    input.disabled = true;
}

document.getElementById("pedido").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        insertarH4 (); // Llama a la función solo si se presiona Enter
    }
});

document.getElementById("27char").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        comprobarDato(); // Llama a la función solo si se presiona Enter
    }
});

function comprobarDato()
{
    let idDato = document.getElementById("27char").value;
    let tabla = document.getElementById("detalle");
    let existe = false;

    for (let i = 0; i< tabla.rows.length; i++)
    {
        if (tabla.rows[i].cells[0].innerText === idDato) {
            existe = true;
            break;
        }
    }
    if (existe) 
    {
        document.getElementById("27char").value = "";
        alert("El codigo de barras ya fué leido");
    }
    else 
    {
        agregaFila();
    }
}

