"use strict";

var moment = require("moment");

function parseDate(date) {
  if (date.includes("hour") === true || date.includes("day") === true || date.includes("minute") === true) {
    var ago = '';
    if (date.includes("hour")) ago = 'h';
    if (date.includes("day")) ago = 'd';
    if (date.includes("minute")) ago = 'm';
    return moment.utc().subtract(date.replace(/\D+$/g, ""), ago).toDate();
  }
  else {
    return moment.utc(date, "YYYY-MM-DD HH:mm").toDate();
  }
}

module.exports = parseDate;