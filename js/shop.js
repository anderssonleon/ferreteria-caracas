
window.onload = function() {
    const contenedor = document.getElementById('onload')
    contenedor.style.opacity = "0"
    contenedor.style.visibility = "hidden"
    contenedor.style.display = "none"
 
 }




class Productos{
  constructor(name,size,price,img){
    this.name = name
    this.size = size
    this.price =price
    this.img =img
}


}
const products =[]
contenedorProduc = document.getElementById('container-shop')

 const inventaryVigas = async()=>{

    const infoVigas = await fetch('https://ferreteria-las-carmenes-default-rtdb.firebaseio.com/inventario.json');

    const infoJson = await infoVigas.json()
    const totalProductVigas = infoJson.vigas;


      totalProductVigas.forEach(element => {
           const inventary = new Productos(element.name,element.size,element.price,element.img)
           products.push(inventary) 
      });
      console.log(products) 
      
products.forEach(element =>{
    const contenedor = document.createElement('div')
    contenedor.className = `d-flex justify-content-center col-lg-4 col-md-6 col-sm-6 mt-5`
    contenedor.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img src="${element.img}" class="card-img-top" alt="imgProducto">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.size}</p>
    <a href="#" class="btn btn-primary">${element.price}</a>
  </div>
</div>
    `
    contenedorProduc.appendChild(contenedor)
});
  
}
inventaryVigas()













