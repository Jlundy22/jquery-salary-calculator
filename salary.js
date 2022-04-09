console.log('hello');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    $('#submitButton').on('click',submitButtonClicked)
}

function submitButtonClicked() {
    const firstNameInput = $('#firstNameInput').val();
    const lastNameInput = $('#lastNameInput').val()
    const idInput = $('#idInput').val()
    const titleInput = $('#titleInput').val()
    const salaryInput = $('#annualSalaryInput').val()
    console.log(firstNameInput,lastNameInput,idInput,titleInput,salaryInput)
    
}



// $('#employeeInfo').append(`
//     <tr>
//     <td>1Hello</td>
//     <td>2Hello</td>
//     <td>3Hello000000000000000000</td>
//     <td>4Hellooooooooooooo</td>
//     <td>5Hello</td>
//     </tr>`)