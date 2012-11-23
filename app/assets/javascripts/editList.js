/*
  editList.js
  JS for edit list screen.
*/

var editList = {

  init:function() {
    $("#addItemBtn").click(function() {
      var data;
      $.post("url", data, function() {
        $("#emptyItem").remove();
        // Create new item.
        $("#itemList")
          .append($("<li id='item-" + data.id + "'>")
            .append($("<span class='itemName'>")
              .append(data.name))
            .append("<button class='deleteItem'>X</button>"));
      });
      $("#addItemName").val("");
    });

    /* from jsfiddle */
    /*

    $(document).ready(function() {
      $("#add").click(function() {
          $("#addDialog").dialog("open");
      });

      $("#addDialog").dialog({
          autoOpen: false,
          resizable: false,
          modal: true,
          title: "Add",
          close: function(event, ui) {
              $("#itemName").val("");
          },
          buttons: {
              Add: function() {
                  // Delete the empty item
                  $("#emptyItem").remove();
                  // Create our item
                  $("#groceries")
                      .append($("<div>")
                          .append($("#itemName").val())
                          .append("<button class='deleteItem'>X</button>"));

                  $(this).dialog("close");
              },
              Cancel: function() {
                  $(this).dialog("close");
              }
          }
      });

      $("#groceries").on("click", "button.deleteItem", function() {
          $(this).parent().remove();
      });
  });​*/

  }

};

$(document).ready(function(){
  editList.init();
});
