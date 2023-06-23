

function calculateSalary(employee: Employee) {
    if (employee.name == "elon") return BASE_SALARY + 60000;

    if (employee.role == "intern") return BASE_SALARY + 5000;
    if (employee.role == "editor") return BASE_SALARY + 10000;
    if (employee.role == "manager") return BASE_SALARY + 15000;

    return BASE_SALARY;
}