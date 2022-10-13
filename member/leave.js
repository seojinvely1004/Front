let pw_input = document.querySelector(".pw_check_box>input");

function pw_check() {
    if (pw_input == "") {
        alert("비밀번호를 입력해주세요~!");
        return false;
    }

    fetch("http://localhost:8080/leave", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_pw: user_pw,
        }),
    })
        .then((res) => res.json())
        .then(function (res) {
            if (res == 1) {
                alert("탈퇴 완료");
            } else {
                alert("비밀번호가 다릅니다!");
            }
            location.href = res.url;
        });
}
