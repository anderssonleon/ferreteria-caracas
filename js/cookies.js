const btnAceptar = document.getElementById('btn-cookies');
const alertCookies = document.getElementById('warning-cookies')
const backgroundAlert = document.getElementById('background-cookies')

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
alertCookies.classList.add('active')
backgroundAlert.classList.add('active')
  
}else{
    dataLayer.push({'event':'cookies-aceptadas'})
}

btnAceptar.addEventListener('click', ()=>{
    backgroundAlert.classList.remove('active');
    alertCookies.classList.remove('active')

    localStorage.setItem('cookies-aceptadas',true)

    dataLayer.push({'event':'cookies-aceptadas'})
}) 