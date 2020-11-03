"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    var year = dateParts[2];
    var month = dateParts[1] - 1;
    var dateOfMonth = dateParts[0];
    return new Date(year, month, dateOfMonth);
};
