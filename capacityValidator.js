function isCapacityValid(attendees) {
    return attendees >= 1 && attendees <= 100;
}
module.exports = isCapacityValid;
