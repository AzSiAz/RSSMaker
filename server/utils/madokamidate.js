var moment = require("moment");

function parseDate(date) {
  if (date.includes("hour") === true || date.includes("day") === true) {
    return moment.utc().subtract(date.replace(/\D+$/g, ""), (date.includes("hour") ? "h" : "d")).toDate();
  }
  else {
    return moment.utc(date, "YYYY-MM-DD HH:mm").toDate();
  }
}

module.exports = parseDate;