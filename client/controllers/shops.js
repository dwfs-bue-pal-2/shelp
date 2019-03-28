$(document).ready(() => {
    getShop = () => {
        $.ajax({   
            method: "GET",
            url: "http://private-29c6c-federicoolivarez.apiary-mock.com/locales",
            success: function(data){
               renderList(data);
               console.log(data);
            }
        });
    }

    $(document).ajaxError(( event, request, settings) => {
        console.log('Error requesting page: ' + settings.url);
    });

    renderList = (data) => {
        data.forEach(shop => {
            addShopToList(shop);
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

    getScore = ($modal, rating) =>{
        for(let i = 0 ; i< rating; i++){
            $modal.find(".stars").append('<i class="fa fa-star"></i>');
        }

        for(let i = 0 ; i< 5 - rating ; i++){
            $modal.find(".stars").append('<i class="far fa-star"></i>');
        }
    }

    getShop();
})