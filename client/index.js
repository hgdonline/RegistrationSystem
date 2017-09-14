import $ from 'jquery'


if (module.hot) {
    module.hot.accept();
}

var userListData = [];

$(document).ready(function () {
    $('#btnAddUser').on('click', addUser);
    /*$('#btnAddUser').on('click', function () {
        setTimeout('window.location.href="/success"', 1000);
    })
    */
});

function addUser(event) {
    event.preventDefault();
    var errorCount = 0;
    $('#addUser input').each(function (index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });
    if (errorCount === 0) {
        var newUser = {
            'username': $('#addUser div p input#inputUserName').val(),
            'phonenumber': $('#addUser div p input#inputPhoneNumber').val(),
            'studentnumber': $('#addUser div p input#inputStudentNumber').val(),
            'qqnumber': $('#addUser div p input#inputQQNumber').val(),
            'userclass': $('#addUser div div div select#classselect option:selected').val(),
            'useremail': $('#addUser div p input#inputUserEmail').val(),
            'usersex': $('#addUser div div input[type="radio"]:checked').val(),
            'maintext': $('#addUser div p textarea#inputUserMaintext').val(),
        }
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/api/adduser',
            dataType: 'JSON'
        }).done(function (response) {
            if (response.msg === '') {
                $('#addUser div p input').val('');
                $('#addUser div p textarea#inputUserMaintext').val('');
            } else {
                alert('Error: ' + response.msg);
            }
        });
        setTimeout('window.location.href="/success"', 1000);
    } else {
        document.getElementById("warninginfo").innerHTML = '<div class="notification is-danger">请完整填写信息</div>';
        return false;
    }
};