$(document).ready(function () {

  $('.saveBtn').on('click', function () {

    var userInput = $(this).siblings('.description').val();

    var timeBlockId = $(this).parent().attr('id');

    localStorage.setItem(timeBlockId, userInput);
  });

  var currentHour = dayjs().hour();

  var currentDate = dayjs().format('dddd, MMMM YYYY, h:mm:ss a');
  $('#currentDay').text(currentDate);

  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');

    var hour = parseInt(timeBlockId.split('-')[1]);

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

    var userInput = localStorage.getItem(timeBlockId);

    $(this).find('.description').val(userInput);
  });
});
