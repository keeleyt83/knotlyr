/*
  editList.js
  JS for edit list screen.
*/

/*
  TODO:
    - use selected option.
    - autocomplete
    - change in select goes to page.
*/

var editList = {

  init:function() {
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
      $.get("../items/" + $(this).parent().attr("id").split("-")[1] + "/delete", [], function(){
        console.log("hello");
      });
    });
  },

  addItem: function() {
    $.post("../items/",  { "item" : { "list_id" : $("#lists").val(),  "name" : $("#addItemName").val() } },
        function(data) {
      $("#emptyItem").remove();
      // Create new item.
      $("#itemList")
        .append($("<li id='item-" + data.id + "'>")
          .append($("<span class='itemName'>")
            .append(data.name))
          .append("<button class='deleteItem'>X</button>"));
    }, "json");
    $("#addItemName").val("");
  }
};

$(document).ready(function(){
  editList.init();
  $("#addItemName").focus();
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

