/* =====// terms of use start ===== */

let all_agree = document.getElementById("all_agree");
let terms1 = document.getElementById("terms_1");
let terms2 = document.getElementById("terms_2");
let terms3 = document.getElementById("terms_3");

let member_terms_box = document.querySelector(".member_terms_box");

// 약관 버튼 활성화를 위한 요소 확인 함수
let button_confirm = document.querySelector(".terms_button>input:nth-of-type(1)");
function terms_button() {
    // 필수 동의 2개 확인
    if (terms1.checked && terms2.checked) {
        button_confirm.classList.remove("dis");
        button_confirm.removeAttribute("disabled", "disabled");
    } else {
        button_confirm.classList.add("dis");
        button_confirm.setAttribute("disabled", "disabled");
    }

    // 전체동의 3개 확인
    if (terms1.checked && terms2.checked && terms3.checked) {
        all_agree.checked = true;
    } else {
        all_agree.checked = false;
    }
    /**
     * 약관 1, 2번이 필수임
     * 1&2 모두 체크되었을 때 버튼 활성화
     */

    // 확인버튼 클릭 시 약관 페이지 왼쪽으로 이동
    button_confirm.addEventListener("click", () => {
        member_terms_box.style.left = "-1000px";
    });
}
terms_button();

function terms_check() {
    // 전체 동의
    all_agree.addEventListener("change", () => {
        if (all_agree.checked) {
            terms1.checked = true;
            terms2.checked = true;
            terms3.checked = true;
        } else {
            terms1.checked = false;
            terms2.checked = false;
            terms3.checked = false;
        }

        terms_button();
        /**
         * 전체동의 체크 시
         * 나머지 약관 모두 동의 체크
         *
         * 전체동의 체크 해제 시
         * 나머지 약관 모두 동의 체크 해제
         */
    });

    let terms = [terms1, terms2, terms3];
    for (let i = 0; i < terms.length; i++) {
        terms_button();

        terms[i].addEventListener("change", () => {
            terms_button();
        });
    }
}
terms_check();

/* ===== terms of use end //===== */

/* =====// user join form start ===== */
// 아이디
let member_id = document.querySelector('.member_join_id>input[type="text"]');

// 이름
let member_name = document.querySelector('.member_join_name>input[type="text"]');

// 비밀번호, 비밀번호 확인
let member_pw1 = document.querySelector('.member_join_pw>input[type="password"]');
let member_pw2 = document.querySelector('.member_join_pw2>input[type="password"]');

// 통신사, 연락처(010 0000 0000)
let member_mobCarr = document.getElementById("member_join_phone");
let member_phone1 = document.querySelector(".member_join_phone>input:nth-of-type(1)");
let member_phone2 = document.querySelector(".member_join_phone>input:nth-of-type(2)");
let member_phone3 = document.querySelector(".member_join_phone>input:nth-of-type(3)");

// 이메일, 도메인
let member_email = document.querySelector(".member_join_email>input:nth-of-type(1)");
let member_domain = document.querySelector(".member_join_email>input:nth-of-type(2)");

// 이메일 select 선택 시 도메인 input에 출력하는 함수
function email_domain_selector() {
    let email_domain = document.getElementById("member_join_email");

    email_domain.addEventListener("change", () => {
        /**
         * "change":
         * email_domain의 input값이 변경될 때마다 이벤트 실행
         * ==> select값이 바뀔 때마다 input의 값이 변경되므로
         * select값이 바뀔 때마다 실행된다고 볼 수 있음
         */
        let text = email_domain.value;
        member_domain.value = text;

        if (text != "") {
            member_domain.setAttribute("disabled", true);
        } else {
            member_domain.removeAttribute("disabled");
        }
        /**
         * 도메인 값이 비어있지 않으면 disabled 속성을 줘서
         * 수정할 수 없게 하고
         * 도메인 값이 비어있으면 disabled 속성을 삭제해서
         * 수정할 수 있도록 해줌
         *
         * disabled -> 태그 속성
         * 해당 input이 활성화되지 않도록 변경(입력X 변경X)
         */
    });
}

email_domain_selector();

// 아이디 유효성 검사 함수
function id_check() {
    let chkid = document.querySelectorAll(".member_join_id>span");

    let id = member_id.value;
    /**
     * chkid:
     * 아이디 영문소문자, 숫자가 들어있는 span과
     * 4 ~ 12자리가 들어있는 span을 list형식으로 저장
     *
     * chkid = [1st span, 2nd span]
     * 인덱스로 보면
     * chkid[0] = 1st span
     * chkid[1] = 2nd span
     */

    let chk1 = /^[a-z0-9]+$/;
    let chk2 = /^.{4,12}$/;
    /**
     * chk1:
     * a ~ z, 0 ~ 9 사이의 문자가 있는지 여부 확인
     * chk2:
     * 내용의 길이가 4자 ~ 12자인지 확인
     */

    // id 유효성 검사
    if (!chk1.test(id)) {
        // chk1 통과 X -> 1st span의 color색, svg색을 빨강으로
        chkid[0].style.color = "var(--color-red)";
        chkid[0].style.stroke = "var(--color-red)";
    } else {
        // chk1 통과 O -> 1st span의 color색, svg색을 초록으로
        chkid[0].style.color = "var(--color-green)";
        chkid[0].style.stroke = "var(--color-green)";
    }

    if (!chk2.test(id)) {
        // chk2 통과 X
        chkid[1].style.color = "var(--color-red)";
        chkid[1].style.stroke = "var(--color-red)";
    } else {
        // chk2 통과 O
        chkid[1].style.color = "var(--color-green)";
        chkid[1].style.stroke = "var(--color-green)";
    }

    if (id == "") {
        // id의 input 값이 비어있을 경우 초기화
        chkid[0].style.color = "var(--color-darkgray)";
        chkid[0].style.stroke = "var(--color-darkgray)";
        chkid[1].style.color = "var(--color-darkgray)";
        chkid[1].style.stroke = "var(--color-darkgray)";
    }
}
id_check();

// member_id input에 키보드 키업될 때 실행되는 이벤트 추가
member_id.addEventListener("keyup", () => {
    id_check();
});
/**
 * "keyup":
 * member_id의 input 내에서 키보드가 눌렸다가 떼어질 때
 * 실행되는 이벤트 추가
 * 키보드를 눌렀다 뗄 때마다 idCheck() 함수를 실행
 * 즉 값을 입력할 때마다 idCheck()를 불러와 유효성 검사를 진행
 */

// 비밀번호 유효성
function pw1_check() {
    let chkLower = document.querySelector(".member_join_pw>span:nth-of-type(1)");
    let chkUpper = document.querySelector(".member_join_pw>span:nth-of-type(2)");
    let chkNumber = document.querySelector(".member_join_pw>span:nth-of-type(3)");
    let chkCharacter = document.querySelector(".member_join_pw>span:nth-of-type(4)");
    let chkLength = document.querySelector(".member_join_pw>span:nth-of-type(5)");

    let pw1 = member_pw1.value;

    let chk1 = /(?=.*?[a-z])/;
    let chk2 = /(?=.*?[A-Z])/;
    let chk3 = /(?=.*?[0-9])/;
    let chk4 = /(?=.*?[!@#$%^*+=])/;
    let chk5 = /^.{8,18}$/;
    /**
     * chk1:
     * a ~ z 가 포함되어있는지 확인
     * chk2:
     * A ~ Z 가 포함되어있는지 확인
     * chk3:
     * 0 ~ 9 가 포함되어있는지 확인
     * chk4:
     * !, @, #, $, %, ^, *, +, = 중 하나가 포함되어있는지 확인
     * chk5:
     * 8자 ~ 18자 사이인지 확인
     */

    // 비밀번호 유효성
    if (!chk1.test(pw1)) {
        // chk1 통과 X
        chkLower.style.color = "var(--color-red)";
        chkLower.style.stroke = "var(--color-red)";
    } else {
        // chk1 통과 O
        chkLower.style.color = "var(--color-green)";
        chkLower.style.stroke = "var(--color-green)";
    }

    if (!chk2.test(pw1)) {
        chkUpper.style.color = "var(--color-red)";
        chkUpper.style.stroke = "var(--color-red)";
    } else {
        chkUpper.style.color = "var(--color-green)";
        chkUpper.style.stroke = "var(--color-green)";
    }

    if (!chk3.test(pw1)) {
        chkNumber.style.color = "var(--color-red)";
        chkNumber.style.stroke = "var(--color-red)";
    } else {
        chkNumber.style.color = "var(--color-green)";
        chkNumber.style.stroke = "var(--color-green)";
    }

    if (!chk4.test(pw1)) {
        chkCharacter.style.color = "var(--color-red)";
        chkCharacter.style.stroke = "var(--color-red)";
    } else {
        chkCharacter.style.color = "var(--color-green)";
        chkCharacter.style.stroke = "var(--color-green)";
    }

    if (!chk5.test(pw1)) {
        chkLength.style.color = "var(--color-red)";
        chkLength.style.stroke = "var(--color-red)";
    } else {
        chkLength.style.color = "var(--color-green)";
        chkLength.style.stroke = "var(--color-green)";
    }

    if (pw1 == "") {
        // pw1의 input 값이 비어있을 경우 초기화
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

function pw2_check() {
    let chkPw2 = document.querySelector(".member_join_pw2>span");

    let pw1 = member_pw1.value;
    let pw2 = member_pw2.value;

    // 비밀번호 확인 유효성
    if (pw1 === pw2) {
        chkPw2.style.color = "var(--color-green)";
        chkPw2.style.stroke = "var(--color-green)";
    } else {
        chkPw2.style.color = "var(--color-red)";
        chkPw2.style.stroke = "var(--color-red)";
    }

    if (pw2 == "") {
        // pw2의 input 값이 비어있을 경우 초기화
        chkPw2.style.color = "var(--color-darkgray)";
        chkPw2.style.stroke = "var(--color-darkgray)";
    }
}

pw1_check();

member_pw1.addEventListener("keyup", () => {
    pw1_check();
});
member_pw2.addEventListener("keyup", () => {
    pw2_check();
});
/**
 * member_pw1의 input(위),
 * member_pw2의 input(아래) 내에서 키보드가 눌렸다가 떼어질 때
 * 실행되는 이벤트 추가
 * idCheck()랑 같은 방식으로 실행
 *
 * 2번째 함수 pw2Check()는 첫번째 비밀번호 값이 저장된 pw1 변수의 값과
 * 두번째 비밀번호 확인 값이 저장된 pw2 변수의 값이 같은지
 * 확인하는 함수
 */

/* ===== user join form end //===== */
