console.log('hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    $('#submitButton').on('click',submitButtonClicked)
}

function submitButtonClicked() {
    const firstNameInput = $('#firstNameInput').val();
    const lastNameInput = $('#lastNameInput').val();
    const idInput = $('#idInput').val();
    const titleInput = $('#titleInput').val();
    const salaryInput = $('#annualSalaryInput').val();
    $('#employeeInfo').append(`
    <tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${salaryInput}</td>
    </tr>`);
      $('#firstNameInput').val('');
      $('#lastNameInput').val('');
      $('#idInput').val('');
      $('#titleInput').val('');
      $('#annualSalaryInput').val('');
    
}



