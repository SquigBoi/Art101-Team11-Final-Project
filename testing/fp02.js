// Shared by the handlers; an empty string means no item is being dragged.
let draggedId = "";
// Change this ID to choose which item matches.
let expectedItemId = "";
//keep track of the bowl's contents
let mixingbowl = {}

// Run this function when dragging starts on an .item element.
$(".item").on("dragstart", function () {
    // $(this) selects the dragged item; .attr("id") reads its HTML ID.
    draggedId = $(this).attr("id");
});

// While an item is over the target, jQuery passes in the event details.
$("#target").on("dragover", function (event) {
    // Cancel the browser's default refusal to accept a drop.
    event.preventDefault();
    // Add the CSS class that highlights the target.
    $("#target").addClass("drag-over");
});

// Clear the drag highlight when the item leaves the target.
$("#target").on("dragleave", function () {
    $("#target").removeClass("drag-over");
});

// Run this function when an item is dropped on #target.
// jQuery supplies event: information and controls for this drop.
$("#target").on("drop", function (event) {
    // Stop default actions such as opening a dropped image.
    event.preventDefault();
    // Remove the CSS class that supplies the drag highlight.
    $("#target").removeClass("drag-over");
    // Ignore drops that did not start on an .item element.
    if (draggedId == "") {
        return;
    }
    // Reads and catalogues the stored materials (edit later to properly store tags)
    $("#result").text("You've added " + draggedId + " to the mix!");
    
});

// Clear the saved ID and highlight after a drop or canceled drag.
$(".item").on("dragend", function () {
    draggedId = "";
    $("#target").removeClass("drag-over");
});