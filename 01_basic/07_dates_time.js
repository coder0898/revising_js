// Date are used to work with dates and times in JavaScript. They are based on the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch).

// we can create a new Date object using the Date() constructor. There are several ways to create a Date object:
let date = new Date();
// console.log(date);//2026-06-20T13:39:01.018Z
// console.log(date.toString()); //Sat Jun 20 2026 19:09:20 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); //Sat Jun 20 2026
// console.log(date.toISOString());
//Sat Jun 20 2026
// 2026-06-20T13:40:17.036Z
// console.log(date.toJSON());
// console.log(date.toLocaleDateString()); //20/6/2026
// console.log(date.toLocaleString());//20/6/2026, 7:11:36 pm

// we can also create a Date object by passing a date string or a timestamp to the Date() constructor.
let date1 = new Date("2022-01-01");
// console.log(date1); //2022-01-01T00:00:00.000Z

// we cn get the current timestamp using the Date.now() method, which returns the number of milliseconds since the Unix epoch.
let timestamp = Date.now();
// console.log(timestamp); // 1640995200000;

// we can also get the individual components of a date using various methods provided by the Date object. For example, we can use the getFullYear() method to get the year, the getMonth() method to get the month, and the getDate() method to get the day of the month.
// console.log(date.getFullYear()); //2026
// console.log(date.getMonth()); //5 (months are zero-indexed, so January is 0 and December is 11)
// console.log(date.getDate()); //20
// console.log(date.getHours()); //13
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// we can also set the individual components of a date using various methods provided by the Date object. For example, we can use the setFullYear() method to set the year, the setMonth() method to set the month, and the setDate() method to set the day of the month.
// date.setFullYear(2023);
// console.log(date); //2023-06-20T13:39:01.018Z

//Temporal is a new API that provides a modern and more powerful way to work with dates and times in JavaScript. It is currently in the proposal stage and is not yet available in all browsers. However, it offers a more intuitive and flexible way to handle dates and times compared to the traditional Date object. You can refer to the official documentation for more information on Temporal and its features.
