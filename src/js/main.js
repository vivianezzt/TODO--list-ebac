$(document).ready(function() {
    $('#task-form').submit(function(event) {
      event.preventDefault();
      const taskName = $('#task-name').val();
      if (taskName) {
        const listItem = $('<li>').text(taskName);
        listItem.click(function() {
          $(this).toggleClass('completed');
        });
        $('#task-list').append(listItem);
        $('#task-name').val('');
      }
    });
  });