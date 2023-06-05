
const BASE_SALARY = 40_000

interface Employee {
    name: string;
    role: string;
    gender: "female" | "male";
}

function calculateSalary(employee: Employee) {
    if (employee.gender == "female") return BASE_SALARY + 5000;
    return BASE_SALARY;
}