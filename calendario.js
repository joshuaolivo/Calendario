
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


let selectedDate = date;
let selectedDay = day;
let selectedMonth = mes;
let selectedYear = año;

contenedor.value = day + "/"+meses[mes]+"/"+año;
mes_div.textContent = meses[mes] + " " + año;


let mostrar = () => {
    calendario.style.display = "block";
    getMonthDays(getNumberOfDay(año, mes));
}

let formatoFecha = d =>{
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}

let getMonthDays = numerbeofdays => {
    dias.innerHTML = '';
    for(let i = 0; i < numerbeofdays; i++){  
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

let getNumberOfDay = (year, month) => new Date(year,month+1,0).getDate();

getMonthDays(getNumberOfDay(año, mes));

let MesAnterior = () =>{
    mes--;
    if(mes < 0)
    {
       mes = 11;
       año --; 
    }
    mes_div.textContent = meses[mes] + " " + año;
    getMonthDays(getNumberOfDay(año, mes));
}

let SiguienteMes = () =>{
    mes++;
    if(mes > 11)
    {
       mes = 0;
       año ++; 
    }
    mes_div.textContent = meses[mes] + " " + año;
    getMonthDays(getNumberOfDay(año, mes));
}

let ocultar = () => {
    calendario.style.display= "none"
} 

ocultar();

antes.addEventListener('click', MesAnterior);
siguiente.addEventListener('click', SiguienteMes);
contenedor.addEventListener('click', mostrar);
