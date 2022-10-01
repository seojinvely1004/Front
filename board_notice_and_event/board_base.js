//===== LOGO text change start ===== //
let logoText = document.querySelector(".header_logo>a");

let logoTextArr = ["ㄱㅎㅈ", "ㄱ하자", "기억하자!"];

let index = 0;
let isAdding = true;
let logoTextArrIndex = 0;

function logoChange() {
    setTimeout(() => {
        logoText.innerText = logoTextArr[logoTextArrIndex].slice(0, index);

        if (isAdding) {
            if (index > logoTextArr[logoTextArrIndex].length) {
                isAdding = false;
                logoText.classList.add("change_logo");

                setTimeout(() => {
                    logoText.classList.remove("change_logo");
                    logoChange();
                }, 2000);

                return;
            } else {
                index++;
            }
        } else {
            if (index == 0) {
                isAdding = true;

                logoTextArrIndex = (logoTextArrIndex + 1) % logoTextArr.length;
            } else {
                index--;
            }
        }
        logoChange();
    }, 200);
}

logoChange();
// ===== LOGO text change end ===== //
