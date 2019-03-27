$(document).ready(function() {


	$('#send').on('click', function(e) {
        e.preventDefault();

        var name = $("#name").val();
        var comments = $("#comments").val();
        var address = $("#direccion").val();
        var typeFood = $("#dropdown").val();
        var rating = $(".rating").val();
        var hours = $("#horario").val();

        console.log('nombre ' + name);
        console.log('comments ' + comments);
        console.log('direccion ' + address);
        console.log('dropdown ' + typeFood);
        console.log('rating ' + rating);
        console.log('horario ' + hours);
        
        
        /*$.post("/locales", { name: name },
            function(status) {
                console.log(status);
            });
        */

    });


});


function getDataUri(url, callback) {
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'));
    };

    image.src = url;
}

// Usage
getDataUri('/logo.png', function(dataUri) {
    // Do whatever you'd like with the Data URI!
});