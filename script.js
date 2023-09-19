const boton = document.getElementById('boton');

boton.addEventListener("click", () => {

    let pais = (document.getElementById('pais').value).toUpperCase();
    for (let i=0 ; i < paises.length ; i++){
        if ((paises[i].nombre).toUpperCase() == pais){ // paises es un arreglo guardado en otro archivo js, vinculado a través del index.html
            pais = paises[i]["alfa-2"];
            console.log(pais);
        }
    }

    let calendario = `https://holidayapi.com/v1/holidays?pretty&country=${pais}&year=2022&key=01e5bcf6-d51d-4936-bf89-45cd1b595c96`;
    async function showDate() { // la api utilizada pertenece a holidayapi.com
        let response = await fetch(calendario);
        let result = await response.json();
        console.log(result.holidays);
        let htmlContentToAppend = "";
        for (let i=0 ; i < result.holidays.length ; i++){
            htmlContentToAppend += `
            <h2 id="nombre">${result.holidays[i].date}</h2>
            <p>${result.holidays[i].name}</p>
            `
        }
        document.getElementById("content").innerHTML = htmlContentToAppend;
    }
    showDate();  
})