window.onload = function() {
   const contenedor = document.getElementById('onload')
   contenedor.style.opacity = "0"
   contenedor.style.visibility = "hidden"
   contenedor.style.display = "none"

}

const carts = document.getElementById('div-ecommerce')

class Producto{
    constructor(nombre,precio,cantidad,img){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.img = img
    }
}

let productos =[]

const producto1 = new Producto("Pinza Ferretería Artesano 4,5 Pulgadas Alicate","40","Mini Pinza de Alicatar o Alicate de Frente. Para lograr mayor precisión.","https://image.shutterstock.com/image-photo/pliers-yellow-black-color-on-260nw-1437550703.jpg") 
const producto2 = new Producto("Caño Estructural Rectangular","50","De 40 X 20 X 0,90 Mm Gramabi Barra De 6 Mt De Largo Tubo 40x20x0,9 Medidas Hierro 40x20","https://http2.mlstatic.com/D_NQ_NP_379625-MLA25470493158_032017-O.webp")
const producto3 = new Producto("Film De Polietileno Negro 4m","15","X 100m (100 Micrones)","https://http2.mlstatic.com/D_NQ_NP_646053-MLA51920642130_102022-O.webp")



productos.push(producto1)
productos.push(producto2)
productos.push(producto3)


console.log(productos)

productos.forEach(prodct=>{
    const contenedor = document.createElement('div')
    contenedor.className =`card col-lg-2 col-md-2 col-sm-2 mt-2 card-widt  `
    contenedor.innerHTML=`
    <div class="card-body">
    <img src=${prodct.img} class="card-img-top" alt="...">
        <h5 class="card-title">${prodct.nombre}
        ${prodct.precio}</h5>
        <button  class="btn w-50  btn btn-outline-info">AGREGAR</button>
        </div>`

        carts.appendChild(contenedor)
})
