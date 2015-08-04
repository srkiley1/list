$(document).ready(function() {
  
  // When user clicks 'Remove item' button, remove specific <li> where item lives
  // .items is a <ul>
  $('.items').on('click', '.remove', function(events) {
    $(this).closest('li').remove();
  });

  // When user clicks 'Remove all items' button, remove all items
  $('.remove-all').click(function() {
    $('li').remove();
  });

  // When user clicks 'Add item' button, add item from text input
  $('.add').click(function() {

  	// Assign new item to a variable
  	var newItem = $('#new-item-input').val();

  	// Create new list element with new item and remove button
  	$('.items').prepend('<li class="item"><h2><input type="checkbox"> ' + newItem + ' <a class="btn btn-danger remove">Remove item</a></h2></li>');

    // Erase new item from text input
  	$('#new-item-input').val('');
  });

});