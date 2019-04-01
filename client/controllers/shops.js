$(document).ready(() => {
    getShop = () => {
        $.ajax({
            method: "GET",
            url: "http://localhost:8008/locales/",
            success: function (data) {
                renderList(JSON.parse(data));
                console.log(JSON.parse(data));
            }
        });
    }

    $(document).ajaxError((event, request, settings) => {
        console.log('Error requesting page: ' + settings.url);
    });

    renderList = (data) => {
        data.forEach(shop => {
            addShopToList(shop);
            markShops(shop);
        });

    }
    addShopToList = (data) => {
        let $modal = $("#modal-row").clone(true);

        $modal.css("display", "block");

        $modal.removeAttr("id");
        $modal.find('#shop-name').text(data.name);
        $modal.find('#phone').text(data.phone);
        $modal.find('#address').text(data.address);

        getScore($modal, data.rating);

        $('#shops .container').append($modal);
    }

    getScore = ($modal, rating) => {
        for (let i = 0; i < rating; i++) {
            $modal.find(".stars").append('<i class="fa fa-star"></i>');
        }

        for (let i = 0; i < 5 - rating; i++) {
            $modal.find(".stars").append('<i class="far fa-star"></i>');
        }
    }

    markShops = (data) => {
        let latLong = {
            lat: data.lat,
            lng: data.lon
        }

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(latLong),
            label: data.name,
            id: data.id,
            map: map,
        })

        marker.addListener('click', function () {
            let $modal = $("#modal-row").clone(true);

            $modal.removeAttr("id");
            $modal.find('#shop-name').text(data[this.get('id')].name);
            $modal.find('#phone').text(data[this.get('id')].phone);
            $modal.find('#address').text(data[this.get('id')].address);

            let modal = $modal.html();

            let string = modal.toString();
            console.log(string);

            let infowindow = new google.maps.InfoWindow({
                content: string
            });

            infowindow.open(map, marker);
        });
    }

    getShop();
})