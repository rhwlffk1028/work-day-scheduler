// It displays the current day, month, and date.
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// takes current time in hour and round it down to nearest hour (ex: 4:34 pm => 4 pm).
var currentTimeInHour = moment().startOf('hour');

// Declares the variable for 9:00 AM which is the beginning work time.

var workDayHours = [9,10,11,12,13,14,15,16,17];
var timeSlot1 = moment().hours(workDayHours[0]).format('hh A')
var timeSlot2 = moment().hours(workDayHours[1]).format('hh A')
var timeSlot3 = moment().hours(workDayHours[2]).format('hh A')
var timeSlot4 = moment().hours(workDayHours[3]).format('hh A')
var timeSlot5 = moment().hours(workDayHours[4]).format('hh A')
var timeSlot6 = moment().hours(workDayHours[5]).format('hh A')
var timeSlot7 = moment().hours(workDayHours[6]).format('hh A')
var timeSlot8 = moment().hours(workDayHours[7]).format('hh A')
var timeSlot9 = moment().hours(workDayHours[8]).format('hh A')

$("#9Am").text(timeSlot1);
$("#10Am").text(timeSlot2);
$("#11Am").text(timeSlot3);
$("#12Pm").text(timeSlot4);
$("#1Pm").text(timeSlot5);
$("#2Pm").text(timeSlot6);
$("#3Pm").text(timeSlot7);
$("#4Pm").text(timeSlot8);
$("#5Pm").text(timeSlot9);

textAreaArr = [$("#textArea9Am"),
               $("#textArea10Am"),
               $("#textArea11Am"),
               $("#textArea12Pm"),
               $("#textArea1Pm"),
               $("#textArea2Pm"),
               $("#textArea3Pm"),
               $("#textArea4Pm"),
               $("#textArea5Pm")
            ]

for (let i = 0; i < workDayHours.length; i++) {
    if (moment().hour() < workDayHours[i]){
        textAreaArr[i].addClass("future");
    } else if (moment().hour() === workDayHours[i]) {
        textAreaArr[i].addClass("present");
    } else if (moment().hour() > workDayHours[i]) {
        textAreaArr[i].addClass("past");
    }
};

var hourData = [9, 10, 11, 12, 13, 14, 15, 16, 17]

for (let i = 0; i < hourData.length; i++) {

    var saveNotes = localStorage.getItem(hourData[i]);
    $(".input"+hourData[i]).text(saveNotes);

}

$(".saveBtn").click(function(event){
    event.preventDefault();
    var userNotes = $(this).siblings(".form-control").val();
    var notesHour = $(this).parent().data("hour")
    localStorage.setItem(notesHour, userNotes);
})

// function saveData (event) {
//     event.preventDefault();
//     var notesHour = $(this).parent().data("hour")
//     var userNotes = $(this).siblings(".form-control").val();
//     localStorage.setItem(notesHour,userNotes);
// }



// var timeSlot1Time = beginningTime;
// var timeSlot2Time = timeSlot1Time.add(1,'h');
// var timeSlot3Time = timeSlot2Time.add(1,'h');
// var timeSlot4Time = timeSlot3Time.add(1,'h');
// var timeSlot5Time = timeSlot4Time.add(1,'h');
// var timeSlot6Time = timeSlot5Time.add(1,'h');
// var timeSlot7Time = timeSlot6Time.add(1,'h');
// var timeSlot8Time = timeSlot7Time.add(1,'h');
// var timeSlot9Time = timeSlot8Time.add(1,'h');

// var timeSlotTimeArray = [timeSlot1Time, timeSlot2Time, timeSlot3Time, timeSlot4Time, timeSlot5Time, timeSlot6Time, timeSlot7Time, timeSlot8Time, timeSlot9Time];




// // time slot from 9AM to 10AM
// var timeSlot1 = beginningTime;
// // time slot from 10AM to 11AM
// var timeSlot2 = "";
// // time slot from 11AM to 12PM
// var timeSlot3 = "";
// // time slot from 12PM to 1PM
// var timeSlot4 = "";
// // time slot from 1PM to 2PM
// var timeSlot5 = "";
// // time slot from 2PM to 3PM
// var timeSlot6 = "";
// // time slot from 3PM to 4PM
// var timeSlot7 = "";
// // time slot from 4PM to 5PM
// var timeSlot8 = "";
// // time slot from 5PM to 6PM
// var timeSlot9 = "";
// // array for time slot 2 ~ time slot 9 in order to go through the for loop to define the time slot.
// var timeSlotArr = [timeSlot2,
//                    timeSlot3,
//                    timeSlot4,
//                    timeSlot5,
//                    timeSlot6,
//                    timeSlot7,
//                    timeSlot8,
//                    timeSlot9
//                    ]

// // for loop defines the time slot 
// for (let i = 0; i < timeSlotArr.length; i++) {
//     timeSlotArr[i] = beginningTime.add(1, "h");
//     timeSlotArr[i] = timeSlotArr[i].format('hh A');
// }

// beginningTime = moment().startOf('day').add(9,'h');

// timeSlot2 = timeSlotArr[0];
// timeSlot3 = timeSlotArr[1];
// timeSlot4 = timeSlotArr[2];
// timeSlot5 = timeSlotArr[3];
// timeSlot6 = timeSlotArr[4];
// timeSlot7 = timeSlotArr[5];
// timeSlot8 = timeSlotArr[6];
// timeSlot9 = timeSlotArr[7];

// // // // adding 9AM time slot into the first position of time slot array.
// // timeSlotArr.unshift(timeSlot1);

// // $("#9Am").text(timeSlot1);
// // $("#10Am").text(timeSlot2);
// // $("#11Am").text(timeSlot3);
// // $("#12Pm").text(timeSlot4);
// // $("#1Pm").text(timeSlot5);
// // $("#2Pm").text(timeSlot6);
// // $("#3Pm").text(timeSlot7);
// // $("#4Pm").text(timeSlot8);
// // $("#5Pm").text(timeSlot9);

// // textAreaArr = [$("#textArea9Am"),
// //                $("#textArea10Am"),
// //                $("#textArea11Am"),
// //                $("#textArea12Pm"),
// //                $("#textArea1Pm"),
// //                $("#textArea2Pm"),
// //                $("#textArea3Pm"),
// //                $("#textArea4Pm"),
// //                $("#textArea5Pm")
// //             ]

// // currentTimeInHour = currentTimeInHour.format('hh A')

// // // function compareTime() {

// // //     for (let i = 0; i < textAreaArr.length; i++) {
// // //         if(currentTimeInHour.isBefore(timeSlotArr[i])) {
// // //             textAreaArr[i].addClass("future");
// // //         } else if (currentTimeInHour.isAfter(timeSlotArr[i])) {
// // //             textAreaArr[i].addClass("past");
// // //         } else if (currentTimeInHour.isSame(timeSlotArr[i])) {
// // //             textAreaArr[i].addClass("present");
// // //         }
// // //     }
// // // }

// // // compareTime();