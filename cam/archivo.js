function navigateTo(page) {
    window.location.href = page;
}

// Obtener elementos
const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

// Abrir el modal
abrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
    removeBackdrop(); // Elimina el backdrop
});

// Cerrar el modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal haciendo clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Función para eliminar el backdrop y asegurarse de que no vuelva a aparecer
function removeBackdrop() {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.remove(); // Elimina el backdrop
    }
    // Asegurarse de que no se agregue un nuevo backdrop
    $('body').removeClass('modal-open'); // Elimina la clase modal-open de Bootstrap
    $('body').css('padding-right', '0');  // Elimina cualquier padding derecho si se usa con Bootstrap
}

// Si estás usando un modal de Bootstrap, podemos asegurarnos de que el backdrop se elimine cuando se muestra el modal
$('#myModal').on('shown.bs.modal', function () {
    removeBackdrop(); // Elimina el backdrop
});
