
const BASE_SALARY = 40000

interface Employee {
    name: string;
    role: string;
    gender: "female" | "male";
    yearsAtCompany: number;
    skills: string[];
}

function calculateSalary(employee: Employee) {

    if (employee.role == "janitor") return BASE_SALARY - 20000;
    if (employee.role == "manager") return BASE_SALARY + 20000;

    return BASE_SALARY;
}
