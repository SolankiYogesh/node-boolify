var BoolArray = [true, false, 'true', 'false', 1, 0];
exports.isBoolean = function (arg) {
  return (BoolArray.indexOf(arg) > -1)
}
exports.Boolify = function (arg) {
    if (BoolArray.indexOf(arg) === -1) {
        return false;
    } else {
        return (arg == true || arg == 'true' || arg == 1);
    }
}
