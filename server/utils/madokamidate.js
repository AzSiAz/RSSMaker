var moment = require("moment");

function parseDate(date) {
  if (date.includes("hours") === true) {
    return moment.utc().subtract(date.replace(/\D+$/g, ""), (date.includes("hours") ? "h" : "d")).toDate();
  }
  else {
    return moment.utc(date, "YYYY-DD-MM HH:mm").toDate();
  }
}

module.exports = parseDate;