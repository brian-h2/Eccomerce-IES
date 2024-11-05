export default function renderCart(btnEvent) {
    const btnMore = document.querySelectorAll(".btn-more"); //Asocia todas las clases existentes
    const btnDelete = document.querySelectorAll(".btn-delete")

    //Por cada btnMore llama al evento correspondiente
    btnMore.forEach(btn => {
        btn.addEventListener("click", function() {
            console.log('hola')
        });
    })
}
