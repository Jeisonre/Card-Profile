let boton = document.querySelector(".profile-card .orange");
let contador = document.querySelector(".profile-card .contador");

let followers = 263;

boton.addEventListener("click", function() {
    if (boton.textContent === "Seguir") {
        followers++;
        boton.textContent = "Siguiendo";
    } else {
        followers--;
        boton.textContent = "Seguir";
    }

    contador.textContent = `${followers}`;
});

const sendEmail = () => {
    const name = document.querySelector('h1').textContent;
    const email = 'leandroespin2002@gmail.com';
    const subject = `Mensaje de ${name}`;
    const body = `Hola, ${name}.\n\n Deseo contactarme contigo.`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

document.querySelector('#send-message-btn').addEventListener('click', sendEmail);