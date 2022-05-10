/*
1. pedir al usuario que registre sus datos
2. pedirle al usuario los datos registrados
3. validar los datos del usuario
a- en caso de que los datos sean validos crear una alerta que le diga que sus datos son correctos
b- en caso de que los datos sean incorrectos volver a pedir los datos hasta que sean correctos.
*/


//pedir registro de datos
const user=prompt("registre un nombre de usuario");
const pass = prompt("registre una contraseña");  

alert("Felicitaciones usted se ha registrado correctamente, por favor pulse -ACEPTAR- para iniciar sesion...");

//pedir datos registrados y validar
login()

function login(){
    const usuario = prompt("ingrese su Nombre de usuario");
    const contraseña = prompt("ingrese su Contraseña");

    const validacion =  usuario === user && contraseña === pass;

    if(validacion == true){
        alert("inicio de sesion exitoso")
    }
    else{
        alert("usuario o contraseña incorrectos!! vuelva a intentar ")

        //pedir los datos hasta que sean correctos
        while(validacion !== true){
            i=0
            i++ 
            login()
        }
    }
}



