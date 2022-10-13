// 이메일, 도메인
let member_email = document.querySelector(
    ".member_edit_email>input:nth-of-type(1)"
);
let member_domain = document.querySelector(
    ".member_edit_email>input:nth-of-type(2)"
);

// 이메일 select 선택 시 도메인 input에 출력하는 함수
function email_domain_selector() {
    let email_domain = document.getElementById("member_edit_email");

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

function edit_button_check() {
    // 연락처 유효성
    if (chkMobcarr.value == "none") {
        alert("통신사를 선택해주세요");
        chkMobcarr.focus();
        return false;
    }

    if (
        chkPhone[0].value != "010" &&
        chkPhone[0].value != "011" &&
        chkPhone[0].value != "016" &&
        chkPhone[0].value != "019"
    ) {
        alert("잘못된 연락처입니다");
        chkPhone[0].value = "";
        chkPhone[0].focus();
        return false;
    } else if (chkPhone[0].value.length != 3) {
        alert("정확한 연락처를 입력해주세요");
        chkPhone[0].focus();
        return false;
    } else if (chkPhone[1].value.length != 4) {
        alert("정확한 연락처를 입력해주세요");
        chkPhone[1].focus();
        return false;
    } else if (chkPhone[2].value.length != 4) {
        alert("정확한 연락처를 입력해주세요");
        chkPhone[2].focus();
        return false;
    }

    //이메일유효성
    if (chkEmail[0].value == "") {
        alert("이메일을 확인해주세요");
        chkEmail[0].focus();
        return false;
    } else if (!chk1.test(email.value)) {
        alert("잘못된 이메일 형식입니다");
        email.focus();
        return false;
    }

    if (chkEmail[1].value == "") {
        alert("이메일 도메인을 확인해주세요");
        chkEmail[1].focus();
        return false;
    } else if (!chk2.test(domain.value)) {
        alert("잘못된 도메인 형식입니다");
        domain.focus();
        return false;
    }

    return true;
}
