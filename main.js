let boton = document.querySelector(".profile-card .orange");
let contador = document.querySelector(".profile-card .contador");

// let followers = 263;

// boton.addEventListener("click", function() {
//     if (boton.textContent === "Seguir") {
//         followers++;
//         boton.textContent = "Siguiendo";
//     } else {
//         followers--;
//         boton.textContent = "Seguir";
//     }

//     contador.textContent = `${followers}`;
// });

// Reemplaza estos valores con tu User ID y tu Token de Acceso
const instagramBusinessAccountId = '17841404945909841'; // Tu ID de Instagram business
const accessToken = 'EAArbNvVWre8BO6qRbFkiku7by4ZAhskaBtwi72OhBYuY83Rsln5yrThGrKTriKXSDZBZAiFW1qzWsy9ZCmZAn03yZBYLAepRk541dIQ42KCtowy6btXSCOJ6ujV8GIXEG8SODKnLU4SexDs6VYwkgxkAZC5dJ0e3d0UOFHoPZCxIyVg2CZCj6nZCOekreHHYePW1amPZAhk16iu'; // Tu token de acceso

async function getInstagramFollowers() {
    const followersElement = document.getElementById('followers');

    try {
        const response = await fetch(`https://graph.facebook.com/v18.0/${instagramBusinessAccountId}?fields=followers_count&access_token=${accessToken}`);
        const data = await response.json();

        console.log('Datos recibidos:', data);

        if (data.followers_count !== undefined) {
            followersElement.textContent = data.followers_count.toLocaleString(); // Formato con separador de miles
        } else {
            followersElement.textContent = 'No disponible';
        }
    } catch (error) {
        console.error('Error al obtener seguidores:', error);
        followersElement.textContent = 'Error de conexión';
    }
}

// Llamamos a la función al cargar la página
getInstagramFollowers();


const sendEmail = () => {
    const name = document.querySelector('h1').textContent;
    const email = 'leandroespin2002@gmail.com';
    const subject = `Mensaje de ${name}`;
    const body = `Hola, ${name}.\n\n Deseo contactarme contigo.`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

document.querySelector('#send-message-btn').addEventListener('click', sendEmail);