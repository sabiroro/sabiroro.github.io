//Pour compiler : npx tsc code.ts

let poupoule = document.getElementById("poupoule");
let caca_URL = "https://www.poulesenville.com/wp-content/uploads/2016/09/cecal1-1.jpg";
poupoule?.addEventListener("click", () => {
    if (poupoule?.getAttribute("src") == caca_URL) {
        poupoule?.setAttribute("src", "icone.jpg");
    }
    else {
        poupoule?.setAttribute("src", caca_URL);
    }
});

function non() {
    /*Notification.requestPermission();
    if (Notification.permission === "granted") {
        new Notification("Cocoricoooooooooo !");
    }*/
}