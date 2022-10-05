let background_image = document.querySelector(".background_image");
let contents = document.querySelector(".contents");
let search_box = document.querySelector(".search_box");
let search_text = document.querySelector(".search_box>h1");
let search_svg = document.querySelector(".search_box>svg");

function wheelAction() {
    window.addEventListener("wheel", (event) => {
        let wheelAction = event.deltaY;

        if (wheelAction > 0) {
            // 휠 업
            background_image.style.backgroundPositionY = "-500px";
            search_box.style.top = "calc(15vh)";
            contents.style.bottom = "0vh";

            if (window.innerWidth <= 1920) {
                background_image.style.height = "100px";

                search_box.style.top = "20px";
                search_text.style.fontSize = "0px";
                search_svg.style.top = "100px";
            } else {
                background_image.style.height = "calc(100vh - 600px)";
            }
        } else if (wheelAction < 0) {
            // 휠 다운
            background_image.style.height = "100vh";

            background_image.style.backgroundPositionY = "0px";
            search_box.style.top = "calc(50vh - 220px / 2)";
            contents.style.bottom = "-100vh";

            if (window.innerWidth <= 1920) {
                search_box.style.top = "calc(50vh - 220px / 2)";
                search_text.style.fontSize = "60px";
                search_svg.style.top = "175px";
            } else {
            }
        }
    });
}

wheelAction();
