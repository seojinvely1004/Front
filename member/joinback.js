/* <=====// terms of use start =====> */
//회원가입 약관, 동의 > 추가할것임
/* <===== terms of use end //=====> */

/* <=====// 01.user join form start =====> */

// 아이디
let member_id = document.querySelector('.member_join_id>input[type="text"]');

// 이름
let member_name = document.querySelector(
    '.member_join_name>input[type="text"]'
);

// 비밀번호, 비밀번호 확인
let member_pw1 = document.querySelector(
    '.member_join_pw>input[type="password"]'
);
let member_pw2 = document.querySelector(
    '.member_join_pw2>input[type="password"]'
);

// 통신사, 연락처(010 0000 0000)
let member_mobCarr = document.getElementById("member_join_phone");
let member_phone1 = document.querySelector(
    ".member_join_phone>input:nth-of-type(1)"
);
let member_phone2 = document.querySelector(
    ".member_join_phone>input:nth-of-type(2)"
);
let member_phone3 = document.querySelector(
    ".member_join_phone>input:nth-of-type(3)"
);

// 이메일, 도메인
let member_email = document.querySelector(
    ".member_join_email>input:nth-of-type(1)"
);
let member_domain = document.querySelector(
    ".member_join_email>input:nth-of-type(2)"
);
/*console.log(member_name);
console.log(member_id);
console.log(member_pw);
console.log(member_pw2);
console.log(member_mobCarr);
console.log(member_phone1);
console.log(member_phone2);
console.log(member_phone3);
console.log(member_email);
console.log(member_domain);*/

/* ===이메일 select 선택 시 도메인 input에 출력 함수=== */
function email_domain_selector() {
    let email_domain = document.getElementById("member_join_email");

    email_domain.addEventListener("change", () => {
        /**==="change"====
        *emain_domain의 input값이 변경 될 때마다 Event실행       
        =>select값이 바뀔 때마다 input의 값이 변경되므로
        select값이 바뀔 때마다 실행된다고 볼 수 있다
        */
        let text = email_domain.value; //input email_domain에있는 value값을 불러 text라는 변수를 선언한다
        member_domain.value = text;

        if (text != "") {
            member_domain.setAttribute("disabled", true);
        } else {
            member_domain.removeAttribute("disabled");
        }
        /** ==="diabled =>태그속성"====
        00.disabled : 해당 input이 활성화되지않도록 변경해준다(입력X 변경X)
        00.도메인값이 비어있지않으면 disabled속성을 줘서 수정 할 수 없게 하고, 
        도메인값이 비어져있으면 disabled속성을 삭제해서 수정할 수 있도록 해준다.
        */
    });
}
email_domain_selector();

/* ===아이디 유효성 검사 함수=== */
function id_check() {
    let chkid = document.querySelectorAll(
        ".member_join_id>span" //span을 가져와야 글자 색을 바꾼다.
    ); /** svg들어가있음 */
    let id = member_id.value; //input member_id에있는 value값을 불러 chkid라는 변수를 선언한다
    /** ==="chkid"====
     * 아이디 영문소문자,숫자가 들어있는 span과
     * 4~12자리가 들어가있는 span을 list형식으로 저장
     * chkid = [1st span, 2nd sapn]
     * 인덱스로 보면
     * chkid[0] = 1st span
     * chkid[1] = 2nd span
     */

    let chk1 = /^[a-z0-9]+$/; //0~9사이의 문자가 있는지 여부 확인
    let chk2 = /^.{4,12}$/; //내용의 길이가 4자~12자인지 확인

    //아이디 유효성 검사
    if (!chk1.test(id)) {
        chkid[0].style.color = "var(--color-red)"; //chk1통과 X =>1st span의 color,svg색을 red로
        chkid[0].style.stroke = "var(--color-red)";
    } else {
        chkid[0].style.color = "var(--color-green)"; //chk1통과 O =>1st span의 color,svg색을 green로
        chkid[0].style.color = "var(--color-green)";
    }

    if (!chk2.test(id)) {
        chkid[0].style.color = "var(--color-red)"; //chk2통과 X =>1st span의 color,svg색을 red로
        chkid[0].style.stroke = "var(--color-red)";
    } else {
        chkid[0].style.color = "var(--color-green)"; //chk2통과 O =>1st span의 color,svg색을 green로
        chkid[0].style.color = "var(--color-green)";
    }
    if (id == "") {
        //id의 inputㅇ이 비어있을 경우 초기화
        chkid[0].style.color = "var(--color-darkgray)";
        chkid[0].style.stroke = "var(--color-darkgray)";
        chkid[1].style.color = "var(--color-darkgray)";
        chkid[1].style.stroke = "var(--color-darkgray)";
    }
}
id_check;

//member_id input에 키보드 키업될 떄 실행되는 이벤트를 추가
member_id.addEventListener("keyup", () => {
    id_check();
});
/**==="keyup"====
 * member_id의 input 내에서 키보드가 눌렸다가 떼어질 때
 * 실행되는 이벤트를 추가함
 * 키보드를 눌렀다 뗄 때마다 idCheck()함수를 실행
 * 즉, 값을 입력 할 때마다 idCheck()를 부러와 유효성 검사를 진행한다.
 */

/* ===// 비밀번호 유효성 검사 함수 // === */
function pw1_check() {
    //span을 가져와야 글자 색을 바꾼다.

    let chkLower = document.querySelector(
        ".member_join_pw>sapn:nth-of-type(1)"
    );
    let chkUpper = document.querySelector(
        ".member_join_pw>sapn:nth-of-type(2)"
    );
    let chkNumber = document.querySelector(
        ".member_join_pw>sapn:nth-of-type(3)"
    );
    let chkCharacter = document.querySelector(
        ".member_join_pw>span:nth-of-type(4)"
    );
    let chkLength = document.querySelector(
        ".member_join_pw>sapn:nth-of-type(5)"
    );

    let pwd = member_pw1.value; //input member_pw1에있는 value값을불러 pwd라는 변수를선언한다

    let chk1 = /(?=.*?[a-z])/; //chk1 : a~z가 포함되어있는지 확인
    let chk2 = /(?=.*?[A-Z])/; //chk2 : A~Z가 포함되어있는지 확인
    let chk3 = /(?=.*?[0-9])/; //chk3 : 0~9가 포함되어있는지  확인
    let chk4 = /(?=.*?[!@#$%^*+=])/; //chk4 : 다음의 특수문자 중 하나가 포함되어있는지 확인
    let chk5 = /^.{8,18}$/; //chk5 : 8~15자 사이인지 확인

    //비밀번호 유효성
    if (!chk1.test(pw1)) {
        chkLower.style.color = "var(--color-red)"; //chk1 통과 X
        chkLower.style.stroke = "var(--color-red)";
    } else {
        chkLower.style.color = "var(--color-green)"; //chk1 통과 O
        chkLower.style.stroke = "var(--color-green)";
    }

    if (!chk2.test(pw1)) {
        chkUpper.style.color = "var(--color-red)";
        chkUpper.style.stroke = "var(--color-red)"; //chk2 통과 X
    } else {
        chkUpper.style.color = "var(--color-green)";
        chkUpper.style.stroke = "var(--color-green)"; //chk2 통과 O
    }

    if (!chk3.test(pw1)) {
        chkNumber.style.color = "var(--color-red)";
        chkNumber.style.stroke = "var(--color-red)"; //chk3 통과 X
    } else {
        chkNumber.style.color = "var(--color-green)";
        chkNumber.style.stroke = "var(--color-green)"; //chk3 통과 O
    }

    if (!chk4.test(pw1)) {
        chkCharacter.style.color = "var(--color-red)";
        chkCharacter.style.stroke = "var(--color-red)"; //chk4 통과 X
    } else {
        chkCharacter.style.color = "var(--color-green)";
        chkCharacter.style.stroke = "var(--color-green)"; //chk4 통과 O
    }
    if (!chk5.test(pw1)) {
        chkLength.style.color = "var(--color-red)";
        chkLength.style.stroke = "var(--color-red)"; //chk5 통과 X
    } else {
        chkLength.style.color = "var(--color-green)";
        chkLength.style.stroke = "var(--color-green)"; //chk5 통과 O
    }
    if (pw1 == "") {
        //pw1의 input값이 비어있을 경우 초기화
        chkLower.style.color = "var(--color-darkgray)";
        chkLower.style.stroke = "var(--color-darkgray)";
        chkUpper.style.color = "var(--color-darkgray)";
        chkUpper.style.stroke = "var(--color-darkgray)";
        chkNumber.style.color = "var(--color-darkgray)";
        chkNumber.style.stroke = "var(--color-darkgray)";
        chkCharacter.style.color = "var(--color-darkgray)";
        chkCharacter.style.stroke = "var(--color-darkgray)";
        chkLength.style.color = "var(--color-darkgray)";
        chkLength.style.stroke = "var(--color-darkgray)";
    }
}

pw1_check();

/* ===// 비밀번호'확인' 유효성 검사 함수 // === */
function pw2_check() {
    //span을 가져와야 글자 색을 바꾼다.
    let chkPw2 = document.querySelector(".member_join_pw2>span");

    let pw1 = member_pw1.value; //input member_pw1에있는 value값을 불러 pw1이라는 변수를 선언한다
    let pw2 = member_pw2.value; //input member_pw2에있는 value값을 불러 pw2이라는 변수를 선언한다

    //비밀번호 확인 유효성
    if (pw1 == pw2) {
        chkPw2.style.color = "var(--color-green)";
        chkPw2.style.stroke = "var(--color-green)";
    } else {
        chkPw2.style.color = "var(--color-red)";
        chkPw2.style.stroke = "var(--color-red)";
    }
    if (pw2 == "") {
        //pw2의 input값이 비어있을 경우 초기화
        chkPw2.style.color = "var(--color-darkgray)";
        chkPw2.style.stroke = "var(--color-darkgray)";
    }
}

member_pw1.addEventListener("keyup", () => {
    pw1_check();
});
member_pw2.addEventListener("keyup", () => {
    pw2_Check();
});
/**member_pw1의 input(위),
 * member_pw2의 input(아래) 내에서 키보드가 눌렸다가 떼어질 떄
 * 실행되는 이벤트를 추가함
 * idCheck()와 같은 방식으로 실행
 *
 * 2번쨰 함수 pw2Check()는 첫번째 비밀번호 값이 저장된 pw1의 변수값과
 * 두번째 비밀번호 확인 값이 저장된 pw2 변수의 값이 같은지 확인하는 함수
 */

/* =====// user join form end ===== */
