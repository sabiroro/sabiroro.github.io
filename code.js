//Pour compiler : npx tsc code.ts
var poupoule = document.getElementById("poupoule");
var caca_URL = "https://www.poulesenville.com/wp-content/uploads/2016/09/cecal1-1.jpg";
poupoule === null || poupoule === void 0 ? void 0 : poupoule.addEventListener("click", function () {
    if ((poupoule === null || poupoule === void 0 ? void 0 : poupoule.getAttribute("src")) == caca_URL) {
        poupoule === null || poupoule === void 0 ? void 0 : poupoule.setAttribute("src", "icone.jpg");
    }
    else {
        poupoule === null || poupoule === void 0 ? void 0 : poupoule.setAttribute("src", caca_URL);
    }
});
function non() {
    /*Notification.requestPermission();
    if (Notification.permission === "granted") {
        new Notification("Cocoricoooooooooo !");
    }*/
}
