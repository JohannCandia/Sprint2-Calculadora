const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

const agregaroperador = (operador)=>
{
    
    if(pantalla.textContent.slice(-1).match(/[+\-*/]/))
    {
        pantalla.textContent=pantalla.textContent.slice(0,-1);
    }
    pantalla.textContent+=operador;
}

botones.forEach((boton)=>{

    boton.addEventListener("click",()=>{

        const botonpulsado = boton.value;
        pantalla.textContent=pantalla.textContent + botonpulsado;
       
        if(boton.id === "igual")
        {
            try{
                const resultado = eval(pantalla.textContent);
                pantalla.textContent=parseFloat(resultado.toFixed(3));
            }
            catch(error)
            {
                pantalla.textContent="ERROR!";
            }
        }
        else if(boton.id==="borrar")
        {
            pantalla.textContent=pantalla.textContent.slice(0,-1); //0 es posicion inicial y -1 la cantidad que irá borrando de izq a der
        }
        else if(boton.id==="ce")
        {
            pantalla.textContent="";
        }
    }
    );   if (boton.textContent.match(/[+\-*/]/)) {
        boton.addEventListener("click", () => agregaroperador(boton.textContent));
        }}
)



