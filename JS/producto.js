$(document).ready(function () {
    // Seleccionamos el botón y el elemento de stock
    const $comprarBtn = $(".btn-primary");
    const $stockDisplay = $("#Stock");

    // Agregamos el evento de clic al botón
    $comprarBtn.click(function () {
        
        // Convertimos el valor de stock a número
        let stockActual = parseInt($stockDisplay.text(), 10);
        
        // Verificamos que haya stock disponible
        if (stockActual > 0) {
            // Reducimos el stock en 1
            stockActual -= 1;
            alert('Producto comprado con exito');
            // Actualizamos el valor visible en la página
            $stockDisplay.text(stockActual);
        } else {
            // Muestra un mensaje si el stock es 0
            alert("No hay stock disponible");
        }
    });

    $("#details").click(function () {
        let visible = $(this).data("visible") || false;
        $("#description").stop().slideToggle(300);
        if (visible) {
            $(this).text("Ver descripción ↓");
            $("#description").hide();
            $(this).next().hide();
        } else {
            $(this).text("Ocultar detalles ↑");
            $("#description").show();
            $(this).next().show();}
        $(this).data("visible", !visible);

        
    });
});


     