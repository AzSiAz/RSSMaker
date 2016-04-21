var moment = require("moment");

function parseDate(date) {
  if (date.includes("hours") === true) {
    return moment().subtract(date.replace(/\D+$/g, ""), (date.includes("hours") ? "h" : "d")).toDate();
  }
  else {
    return new Date(date);
  }
}

module.exports = parseDate;