//hacer peticion
async function mostrarProductos() {
    let promesa = await getJSONData(PRODUCTS_URL)

let productos = promesa.data
productos.forEach(producto => {
    let contenedor = document.getElementById("listado-productos")
    contenedor.innerHTML += `
    <a href="product-info.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="${producto.imgSrc}" alt="${producto.description}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${producto.name}</h4>
                    <small class="text-muted">${producto.soldCount} artículos</small>
                </div>
                <p class="mb-1">${producto.description}</p>
                <div class="text-right mt-3"><p>${producto.currency+producto.cost}</p></div>
            </div>
        </div>
    </a>
    `
});
}






//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
mostrarProductos()
});