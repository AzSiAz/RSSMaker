var moment = require("moment");

function parseDate(date) {
  if (moment(date).isValid() == false) {
    return moment(Date.now()).subtract(date.replace(/\D+$/g, ""), (date.includes("hours") ? "h" : "d")).toDate();
  }
  else {
    return new Date(date);
  }
}

module.exports = parseDate;