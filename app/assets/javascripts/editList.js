/*
  editList.js
  JS for edit list screen.
*/

/*
  TODO:
    - autocomplete
    - change in select goes to page.
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
      window.location.href=$("#lists").val();
    });

    $("#itemList li").on("click", "button.deleteItem", function() {
      var itemId = + $(this).parent().attr("id").split("-")[1];
      $.destroy({ url: '/items/' + itemId, success: function(response) {
          $("li#item-" + itemId).remove();
        }
      });
    });
  },

  addItem: function() {
    $.create("/items/", { item : { list_id : $("#lists").val(),  name : $("#addItemName").val() } },
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
