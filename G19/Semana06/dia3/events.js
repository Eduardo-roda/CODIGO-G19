//addEventLsitener
//la forma de js moderno me permite agrefgar los evenos de una forma mas legible 


const btnPrueba = document.querySelector("#btn-prueba");
const btnMouseover = document.querySelector("#btn-mouseover")

//------------------------------------------




btnPrueba.onclick = function (e){
    console.log("click desde otro archivo")
    Swal.fire("Hola mundo ")

}
btnPrueba.onmouseover = function (event){
    console.log("click desde mouseover")
}

//......................
const btnPregunta=document.querySelector("#btn-pregunta");
btnPregunta.onclick = function(){
    Swal.fire("Alguna pregunta","Aca el texto","question")
    
}

//--------------------------------------
function showAlert(icon,title,text){
    Swal.fire({
            icon,
            title,
            text,
            footer: "<a href='https://google.com'>Link de footer</a>"}
        
    )
}

//--------------------------------------
btnError = document.querySelector("#btn-error");

btnError.onclick = function(e){
    showAlert("error","Hubo un error","Email or password erroneos")

}

//-----------------------------------------------

const btnSucces = document.querySelector("#btn-success");
btnSucces.onclick = function(){
    showAlert("success","Todo ok","Todo salio bien")
}

//--------------------------------------------------
const btnPruebas = document.querySelector("#btn-pruebas");
btnPruebas.onclick = function(){
    Swal.fire({
    title:"Alerta",
    text:"texto de alerta",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText:"guardar",
    denyButtonText :"No quiero"
})


}

//--------------------------------------------------------------
const btnEduardo = document.querySelector("#btn-eduardo");
btnEduardo.onclick = function(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Salio todo bien!'
      })
}