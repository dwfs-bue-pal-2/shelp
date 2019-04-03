const serverUrl = "http://localhost:3000/";
$(document).ready(() => {
  var infowindow = null;
  var marker;
  getShops = () => {
    $.ajax({
      method: "GET",
      url: serverUrl + "locales/",
      success: function(data) {
        renderList(JSON.parse(data));
      }
    });
  };
  getReviews = (shopData, id) => {
    $.ajax({
      method: "GET",
      url: serverUrl + "reviews/shop/" + id,
      success: function(reviews) {
        createShopModal(JSON.parse(shopData), reviews);
      }
    });
  };
  getShop = id => {
    $.ajax({
      method: "GET",
      url: serverUrl + "locales/" + id,
      success: function(data) {
        getReviews(data, id);
      }
    });
  };

  $(document).ajaxError((event, request, settings) => {
    console.log("Error requesting page: " + settings.url);
  });

  renderList = data => {
    data.forEach(shop => {
      addShopToList(shop);
      markShops(shop);
    });
  };

  addShopToList = data => {
    let $modal = $("#modal-row").clone(true);
    $modal.css("display", "block");
    $modal.removeAttr("id");
    $modal.find(".shop-name").text(data.name);
    $modal.find(".shop-name").attr("id", data.id);
    $modal.find(".phone").text(data.phone);
    $modal.find(".address").text(data.address);

    getScore($modal, data.rating);

    $("#shops .container").append($modal);
    $("#" + data.id).on("click", function() {
      modal.style.display = "none";
      getShop(data.id);
    });
  };
  function createShopModal(data, reviews) {
    let $modalShop = $("#modal-shop");
    //CARGA INFO AL MODAL
    $modalShop.find(".p-shop-name").text(data.name);
    //$modalShop.find(".shop-name").attr("id", data.id);
    $modalShop.find(".p-phone").text(data.phone);
    $modalShop.find(".p-address").text(data.address);
    $modalShop.find(".p-description").text(data.description);
    $(".reviews").html("");
    for (let elem of reviews) {
      let $review = $modalShop.find("#review-container").clone(true);
      $review.find(".review-comment").text(elem.comment);
      $review.find(".review-author").text("Author: " + elem.user);
      $(".reviews").append($review);
      console.log(elem.user, elem.score, elem.comment, elem.date);
    }
    modalShop.style.display = "block";
  }
  getScore = ($modal, rating) => {
    for (let i = 0; i < rating; i++) {
      $modal.find(".stars").append('<i class="fa fa-star"></i>');
    }

    for (let i = 0; i < 5 - rating; i++) {
      $modal.find(".stars").append('<i class="far fa-star"></i>');
    }
  };

  markShops = data => {
    let latLong = {
      lat: data.lat,
      lng: data.lon
    };

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(latLong),
      label: data.name,
      id: data.id,
      map: map
    });

    google.maps.event.addListener(marker, "click", function() {
      let $modal = $("#modal-row-infoWindow").clone(true);
      $modal.removeAttr("id");
      $modal.find(".shop-name").text(data.name);
      $modal.find(".phone").text(data.phone);
      $modal.find(".address").text(data.address);

      let modal = $modal.html();
      let string = modal.toString();

      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({
        content: string
      });
      map.panTo(marker.position);
      infowindow.open(map, marker);
      infowindow.setPosition({ lat: data.lat, lng: data.lon });
    });
  };

  getShops();
});
