'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelectorAll('ul > li');

  function convertSalary(salary) {
    return parseInt(salary.replace(/[^0-9.-]+/g, ''), 10);
  }

  function sortList(list) {
    const sortedList = Array.from(list).sort((a, b) => {
      const salaryA = convertSalary(a.dataset.salary);
      const salaryB = convertSalary(b.dataset.salary);

      return salaryB - salaryA;
    });

    const parentList = list[0].parentElement;

    sortedList.forEach((item) => parentList.appendChild(item));
  }

  sortList(employeeList);
});
