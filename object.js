var employee;
employee = {
    id: 201,
    name: "Gayathri"
};
var getEmployeeDetails = function (employee) {
    return "".concat(employee.name, "'s employee id is: ").concat(employee.id);
};
var getCharacteristics = function (name) {
    return {
        name: name,
        height: 5.12,
        bloodgroup: "O-ve",
        state: "AP",
        pincode: "533250",
        married: false
    };
};
var employeeData = getEmployeeDetails(employee);
var characteristics = getCharacteristics("Basha");
console.log("characteristics are", characteristics, getCharacteristics(employee.name));
