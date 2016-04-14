var moment = require("moment");

function parseDate(date) {
  if (moment(date).isValid() == false) {
    // regex : date.replace(/\D+$/g, "");
    return moment().subtract((date.includes("hours") ? "h" : "d"), date.charAt(0)).toDate();
  }
  else {
    return new Date(date);
  }
}

module.exports = parseDate;