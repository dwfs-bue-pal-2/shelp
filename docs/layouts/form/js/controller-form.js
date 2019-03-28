$(document).ready(function() {

	$('#send').on('click', function(e) {
        e.preventDefault();

        var name = $("#name").val();
        var comments = $("#comments").val();
        var address = $("#direccion").val();
        var phone = $("#telefono").val();
        var typeFood = $("#dropdown").val();
        var rating = $("input[name='rating']:checked").val();
        var hours = $("#horario").val();
        var image = $("#file").val();

        if (name && comments && address && typeFood && phone && rating && hours ) {

           $.post("https://private-29c6c-federicoolivarez.apiary-mock.com/locales", { name: name, comments:comments,
                address: address,phone: phone,typeFood: typeFood, rating:rating, hours:hours, image:image },
                function(data,status) {
                    console.log(" Status: " + status);
                    if (status == 'success') {
                        alert('El local ' + name  + ' fue dado de alta con exito!');
                        clearForm();            
                    } 
            });
        }
        else{
                alert('Debe completar todos los campos');
        }
    });

    $('#cancel').on('click', function(e) {
        e.preventDefault();
        clearForm();
        console.log(rating);
    });
   
    function clearForm(){
         $("#alta-locales-form").find("input, textarea").val("");
    };  
});



