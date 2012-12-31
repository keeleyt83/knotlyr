/*
  shop.js
  JS for shop screen.
*/

var shop = {

  init:function() {
    $("#addItemName").focus();

    $("#addNewItemWrapper").keypress(function(e) {
      if (e.which == 13) {
        shop.addItem();
        return false;
      }
    });

    $("#addItemBtn").click(function() {
      shop.addItem();
    });

    $("#lists").change(function() {
      window.location.href="/shop/" + $("#lists").val();
    });

    $("#itemList").on("click", "button.deleteItem", function() {
      var itemId = + $(this).parent().attr("id").split("-")[1];
      var listId = $("#lists").val();
      $.destroy({ url: "/lists/" + listId + "/items/" + itemId, success: function(response) {
          $("li#item-" + itemId).remove();
          if( $("#itemList").children().length == 0 ) {
            $("#itemList")
              .append("<li id='emptyItem'>List is empty.</li>");
          }
        }
      });
    });
  },

  addItem: function() {
    var newItemName = $.trim($("#addItemName").val());
    if (newItemName != "") {
      var listId = $("#lists").val();
      $.create("/lists/" + listId + "/items/", { item : { list_id : listId,  name : $("#addItemName").val(), quantity : $("#qty").val() } },
          function(response) {
        $("#emptyItem").remove();
        // Create new item.
        $("#itemList")
          .append($("<li id='item-" + response.id + "'>")
            .append($("<div>")
              .append($("<span class='itemName'>")
                .append(response.name)))
            .append($("<span class='itemQty'>")
              .append(response.quantity))
            .append("<button class='deleteItem'>X</button>"));
      }, "json");
    }
    $("#addItemName").val("");
    $("#addItemName").focus();
    $("#qty").val("1");
  }
};

$(document).ready(function(){
  shop.init();
});
