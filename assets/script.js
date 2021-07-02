// It displays the current day, month, and date.
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);


// This is an array of working hours of a day.
var workDayHours = [9,10,11,12,13,14,15,16,17];

// This converts each element in array into (hh A) format (ex. 9 => 09 AM || 14 => 02 PM)
var timeSlot1 = moment().hours(workDayHours[0]).format('hh A')
var timeSlot2 = moment().hours(workDayHours[1]).format('hh A')
var timeSlot3 = moment().hours(workDayHours[2]).format('hh A')
var timeSlot4 = moment().hours(workDayHours[3]).format('hh A')
var timeSlot5 = moment().hours(workDayHours[4]).format('hh A')
var timeSlot6 = moment().hours(workDayHours[5]).format('hh A')
var timeSlot7 = moment().hours(workDayHours[6]).format('hh A')
var timeSlot8 = moment().hours(workDayHours[7]).format('hh A')
var timeSlot9 = moment().hours(workDayHours[8]).format('hh A')

// Timeblocks get replaced with 09 AM ~ 05 PM text with format.
$("#9Am").text(timeSlot1);
$("#10Am").text(timeSlot2);
$("#11Am").text(timeSlot3);
$("#12Pm").text(timeSlot4);
$("#1Pm").text(timeSlot5);
$("#2Pm").text(timeSlot6);
$("#3Pm").text(timeSlot7);
$("#4Pm").text(timeSlot8);
$("#5Pm").text(timeSlot9);

// This is an array that contains "id" of the input text area for each timeblock.
textAreaArr = [$("#textArea9Am"),
               $("#textArea10Am"),
               $("#textArea11Am"),
               $("#textArea12Pm"),
               $("#textArea1Pm"),
               $("#textArea2Pm"),
               $("#textArea3Pm"),
               $("#textArea4Pm"),
               $("#textArea5Pm")
            ];

// It goes through the loop and compare the current time (in hour) and the timeblocks time (in hour).
// Depending on current time (in hour), the past text areas are grayed out, the present text area is red, the future text areas are green.
// moment().hour() = current time in hour in string (ex. 4:30 in the afternoon = "16")
for (let i = 0; i < workDayHours.length; i++) {
    if (moment().hour() < workDayHours[i]){
        textAreaArr[i].addClass("future");
    } else if (moment().hour() === workDayHours[i]) {
        textAreaArr[i].addClass("present");
    } else if (moment().hour() > workDayHours[i]) {
        textAreaArr[i].addClass("past");
    }
};

// get the data and then set the updated text to local storage.
for (let i = 0; i < workDayHours.length; i++) {
    var saveNotes = localStorage.getItem(workDayHours[i]);
    $(".input"+workDayHours[i]).val(saveNotes);
}

// when the save button is clicked, the data is saved into local storage.
$(".saveBtn").click(function(event){
    event.preventDefault();
    var userNotes = $(this).siblings(".form-control").val();
    var notesHour = $(this).parent().data("hour")
    localStorage.setItem(notesHour, userNotes);
})