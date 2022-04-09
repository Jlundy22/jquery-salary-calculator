console.log('hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    $('#submitButton').on('click',submitButtonClicked);
    $('table').on('click','.deleteButton', deleteEmployee);
}

function submitButtonClicked() {
    const firstNameInput = $('#firstNameInput').val();
    const lastNameInput = $('#lastNameInput').val();
    const idInput = $('#idInput').val();
    const titleInput = $('#titleInput').val();
    const salaryInput = $('#annualSalaryInput').val();
    const monthlySalary = $('#annualSalaryInput').val() / 12;
    //console.log('Monthy salary', monthlySalary)
    $('#employeeInfo').append(`
    <tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${salaryInput}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`);
    $('#monthlyCost').append(monthlySalary);
      $('#firstNameInput').val('');
      $('#lastNameInput').val('');
      $('#idInput').val('');
      $('#titleInput').val('');
      $('#annualSalaryInput').val('');
    
}

function deleteEmployee() {
    console.log('DELETE')
    const delete1 = $(this).closest("tr");
    $(delete1).remove();
}



