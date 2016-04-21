var moment = require("moment");

function parseDate(date) {
  if (date.includes("hours") === true) {
    return moment().subtract(date.replace(/\D+$/g, ""), (date.includes("hours") ? "h" : "d")).toDate();
  }
  else {
    return moment(date, "YYYY-DD-MM").toDate();
  }
}

module.exports = parseDate;