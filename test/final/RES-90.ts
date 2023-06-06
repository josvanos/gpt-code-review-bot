
const BASE_SALARY = 40_000

interface Employee {
    name: string;
    role: string;
    gender: "female" | "male";
    yearsAtCompany: number;
    skills: string[];
}

function calculateSalary(employee: Employee) {
    let salary = BASE_SALARY;
    salary += employee.yearsAtCompany * 1000;
    salary += employee.skills.length * 200;

    return salary;
}