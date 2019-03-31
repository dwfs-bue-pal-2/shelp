$(document).ready(function() {


    $('#send').on('click', function(e) {
        e.preventDefault();

        var name = $("#name").val();
        var description = $("#comments").val();
        var address = $("#direccion").val();
        var phone = $("#telefono").val();
        var type = $("#dropdown").val();
        var hours = $("#horario").val();
        var img = $("#file").val();

        if (name && description && address && type && phone && hours) {

            $.post("http://localhost:3000/locales", {
                    name: name,
                    description: description,
                    address: address,
                    phone: phone,
                    type: type,
                    hours: hours,
                    img: img
                },
                function(data, status) {
                    console.log(" Status: " + status);
                    if (status == 'success') {
                        alert('El local ' + name + ' fue dado de alta con exito!');
                        clearForm();
                    }
                });
        } else {
            alert('Debe completar todos los campos');
        }
    });

    $('#cancel').on('click', function(e) {
        e.preventDefault();
        clearForm();
        console.log(rating);
    });

    function clearForm() {
        $("#alta-locales-form").find("input, textarea").val("");
    };
});