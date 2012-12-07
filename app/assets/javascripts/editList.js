/*
  editList.js
  JS for edit list screen.
*/

/*
  TODO:
    - delete default css, js files.
    - autocomplete
    - http://amillionbetterthings.com/2010/06/24/rails-nested-forms-with-ajax-add-and-remove/
    - mobile is frakked? http://stackoverflow.com/questions/8069131/using-jquery-mobile-and-rails-restful-controller-actions
*/

var editList = {

  init:function() {
    $("#addItemName").focus();

    $("#addItemName").keypress(function(e) {
      if (e.which == 13) {
        editList.addItem();
        return false;
      }
    });

    $("#addItemBtn").click(function() {
      editList.addItem();
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
    var listId = $("#lists").val();
    $.create("/lists/" + listId + "/items/", { item : { list_id : listId,  name : $("#addItemName").val() } },
        function(response) {
      $("#emptyItem").remove();
      // Create new item.
      $("#itemList")
        .append($("<li id='item-" + response.id + "'>")
          .append($("<span class='itemName'>")
            .append(response.name))
          .append("<button class='deleteItem'>X</button>"));
    }, "json");
    $("#addItemName").val("");
  }
};

$(document).ready(function(){
  editList.init();
});
