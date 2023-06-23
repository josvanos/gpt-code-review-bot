const BASE_SALARY = 40000

interface Employee {
    name: string;
    role: string;
    gender: "female" | "male";
    yearsAtCompany: number;
    skills: string[];
}

function calculateSalary(employee: Employee) {
    if (employee.name == "elon") return BASE_SALARY + 30000;

    if (employee.role == "intern") return BASE_SALARY + 5000;
    if (employee.role == "editor") return BASE_SALARY + 10000;
    if (employee.role == "manager") return BASE_SALARY + 15000;

    return BASE_SALARY;
}
