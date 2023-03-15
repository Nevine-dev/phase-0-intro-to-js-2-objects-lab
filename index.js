// Write your solution in this file!
const employee = {
    name: 'Dyes Junior',
    streetAddress: 'Juja, Kiambu',
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    return {...employee, [name]: streetAddress}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[name]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]
    return employee
}
