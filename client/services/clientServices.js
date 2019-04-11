getShopList = (callback) => {
    $.ajax({
        method: "GET",
        url: serverUrl + "locales/",
        success: function(data) {
          callback(JSON.parse(data));
        }
    });
};

getShopReviews = (id, shopData, callback) => {
    $.ajax({
      method: "GET",
      url: serverUrl + "reviews/shop/" + id,
      success: function(reviews) {
          callback(JSON.parse(shopData), reviews);
      }
    });
};

getShopData = (id, callback) => {
    $.ajax({
        method: "GET",
        url: serverUrl + "locales/" + id,
        success: function(data) {
          callback(data, id);
        }
      });
}

getShopByName = (element, callback) => {
  $.ajax({
      method: "GET",
      url: serverUrl + "locales/findShop/" + $(element).val(),
      success: function(data) {
        callback(element, JSON.parse(data));
      }
    });
}

