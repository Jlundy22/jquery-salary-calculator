console.log('hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    $('#submitButton').on('click',submitButtonClicked);
    $('table').on('click','.deleteButton', deleteEmployee);
}
// loops through all monthly salaries and add them up to append to the DOM 
const monthlySalaryArray = [];
let sumOfAllEmployeeMonthlySalary = 0;
function sumOfAllMonthlySalaries() {
    for (let i=0; i < monthlySalaryArray.length; i++) {
        sumOfAllEmployeeMonthlySalary += Number(monthlySalaryArray[i]);
    }
}


function submitButtonClicked() {
    const firstNameInput = $('#firstNameInput').val();
    const lastNameInput = $('#lastNameInput').val();
    const idInput = $('#idInput').val();
    const titleInput = $('#titleInput').val();
    const salaryInput = $('#annualSalaryInput').val();
    const monthlySalary = $('#annualSalaryInput').val() / 12;
    if (firstNameInput === ''|| lastNameInput === ''|| idInput === ''|| titleInput === '' || salaryInput === '') {
        return;
    }
    monthlySalaryArray.push(monthlySalary);
    //console.log('Monthy salary', monthlySalary)
    $('#employeeInfo').append(`
    <tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>$${salaryInput}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`);
    $('#monthlyCost').append();
      $('#firstNameInput').val('');
      $('#lastNameInput').val('');
      $('#idInput').val('');
      $('#titleInput').val('');
      $('#annualSalaryInput').val('');
    sumOfAllEmployeeMonthlySalary = 0; 

    sumOfAllMonthlySalaries();

    $('#monthlyCost').empty();
    $('#monthlyCost').append('$',sumOfAllEmployeeMonthlySalary.toFixed(2));
    if (sumOfAllEmployeeMonthlySalary > 20000) {
        $('#monthlyCost').addClass('red');
    }  
    
}

function deleteEmployee() {
    const delete1 = $(this).closest("tr");
    $(delete1).remove();
}



