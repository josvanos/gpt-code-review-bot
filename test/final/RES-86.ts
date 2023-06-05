
const BASE_SALARY = 40_000

interface Employee {
    name: string;
    role: string;
    gender: "female" | "male";
}

function calculateSalary(employee: Employee) {
    return BASE_SALARY;
}