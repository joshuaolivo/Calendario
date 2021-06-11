
const contenedor = document.getElementById('Contenedor');
const calendario = document.querySelector('.calendario');
const dias = document.querySelector('.dias');
const mes_div = document.getElementById('mes');
const antes = document.getElementById('prev');
const siguiente = document.getElementById('next'); 
const meses = ["ENERO","FEBRERO","MARZO","ABRIL", "MAYO", "JUNIO", "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]; 


let date = new Date();
let day = date.getDate();
let mes = date.getMonth();
let año = date.getFullYear();

contenedor.value = day + " " + meses[mes] + " DE " + año;
mes_div.textContent = meses[mes] + " " + año;


let mostrar = () => {
    calendario.style.display = "block";
    escribirDiasDelMes(obtenerDiasDelMes(año, mes));
}

let escribirDiasDelMes = numerodedias => {
    dias.innerHTML = '';
    for(let i = 0; i < numerodedias; i++){  
        const dia = document.createElement('div');
		dia.classList.add('day');
		dia.textContent = i + 1;
        dias.appendChild(dia);
        dia.addEventListener('click', mostrarFecha  = () => {
        contenedor.value = (i+1) + ' ' + meses[mes] + " DE "+año ;
        ocultar();
        });
    }   
}

let obtenerDiasDelMes = (año, mes) => new Date(año,mes+1,0).getDate();

let MesAnterior = () =>{
    mes--;
    if(mes < 0)
    {
       mes = 11;
       año --; 
    }
    mes_div.textContent = meses[mes] + " " + año;
    escribirDiasDelMes(obtenerDiasDelMes(año, mes));
}

let SiguienteMes = () =>{
    mes++;
    if(mes > 11)
    {
       mes = 0;
       año ++; 
    }
    mes_div.textContent = meses[mes] + " " + año;
    escribirDiasDelMes(obtenerDiasDelMes(año, mes));
}

let ocultar = () => {
    calendario.style.display= "none"
} 

antes.addEventListener('click', MesAnterior);
siguiente.addEventListener('click', SiguienteMes);
contenedor.addEventListener('click', mostrar);
