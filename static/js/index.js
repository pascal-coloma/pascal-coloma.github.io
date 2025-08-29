const url = "https://api.fonasa.cl/medicamentos/obtener"

const consultarApi = async () => {
    const cuerpoPost = {
        latitud: "-33.0513034", 
        longitud: "-71.6233221", 
        nombreMedicamento: "PARACETAMOL"
    }

    const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({cuerpoPost})
    });
    const data = await respuesta.json()
    mostrarAnimales(data['data'])

}

consultarApi()

const mostrarAnimales = (animales) => {
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = "" // Se limpie en caso de existir datos
    
    animales.forEach(animal => {
        const card = document.createElement('div')
        card.classList.add("col-sm")
        card.innerHTML = `<div class="card shadow-sm">
                            <img src="${animal.imagen}" class="card-img-top" alt="${animal.nombre}">
                            <div class="card-body">
                            <h5 class="card-title">${animal.nombre}</h5>
                            <p class="card-text">tipo: ${animal.tipo}</p>
                            <p class="card-text">Edad: ${animal.edad}</p>
                            <p class="card-text">Comuna: ${animal.comuna}</p>
                            <p class="card-text">Estado: ${animal.estado}</p>
                            <a href="${animal.url}" target="_blank">Ver mascotex</a>
                            </div>
                            </div>`
        contenedor.appendChild(card)
    })
}