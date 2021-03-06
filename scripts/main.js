let currentView = 'year';

const calendar = new Calendar();
const form = new Form();

function changeView(view) {
  calendar.changeView(view);
}

$('#set form').submit(function(e) {
	let day = $('select[name="day"]').val();
	let month = $('select[name="month"]').val();
	let year = $('select[name="year"]').val();
	if(( year == 2016 && month < 7 ) || ( year == 2017 && month > 4 )){
		alert("The month you selected is not available for the year you selected");
	}
	else if((( month == 3 || month == 8 || month == 10 ) && day == 31 ) || ( month == 1 && day > 28 )){
		alert("The day you selected is not available for the month you selected");
	}
	else{
		currentDate.setFullYear(year, month, day);
		$('#year').remove();
		$('#month').remove();
		$('#week').remove();
		$('#day').remove();
		calendar.init();
	}
});

$('#create form').submit(function(e) {
  let eventName =  $('input[name="eventName"]').val();
  let eventDesc = $('#eventDesc').val();
  let date = {
    "start": $('input[name="startDate"]').val(),
    "end": $('input[name="endDate"]').val()
  };
  let time = {
    "start": $('input[name="startTime"]').val(),
    "end": $('input[name="endTime"]').val()
  };
  form.createEvent(eventName, eventDesc, date, time);
});


function editEvent(id) {
  $('#edit').modal('toggle');
  $('#edit .modal-body .eventId').val(id);
}

$('#edit form').submit(function(e) {
  let eventId = $('#edit .modal-body .eventId').val();;
  let eventName =  $('input[name="eventName"]').val();
  let eventDesc = $('#eventDesc').val();
  let date = {
    "start": $('input[name="startDate"]').val(),
    "end": $('input[name="endDate"]').val()
  };
  let time = {
    "start": $('input[name="startTime"]').val(),
    "end": $('input[name="endTime"]').val()
  };
  form.editEvent(eventId, eventName, eventDesc, date, time);
});

calendar.init();
