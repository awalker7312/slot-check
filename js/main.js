$(document).ready(function() {
  $("#search").click(function() {
    var slot = $("#slot_number").val();
    if (slot != "") {
      $.ajax({
        url: "fetch.php",
        method: "POST",
        data: {
          slot: slot
        },
        dataType: "JSON",
        success: function(data) {
          $("#slot_details").css("display", "block");
          $("#item_slot").text(data.slot);
          $("#item_number").text(data.item);
          $("#item_description").text(data.description);
          $("#item_inventory").text(data.inventory + " cases");
          $("#item_order").text(data.onorder + " next PO");
          $("#item_movement").text(data.movement + " cs / week");
          $("#item_tihi").text(data.tihi);
        }
      });
    } else {
      alert("Please enter a slot.");
      $("#slot_details").css("display", "none");
    }
  });
});

var input = document.getElementById("slot_number");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});
