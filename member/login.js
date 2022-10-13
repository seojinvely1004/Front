let member_id = document.querySelector('member_login_id>input');
let member_pw = document.querySelector('member_login_pw>input');

function input_value_check() {

    if(member_id.value == "") {
        alert("아이디를 입력해주세요");
        member_id.focus();
        return false;
    }

    if(member_pw.value == "") {
        alert("비밀번호를 입력해주세요");
        member_pw.focus();
        return false;
    }
    return true;
}