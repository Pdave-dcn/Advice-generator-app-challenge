import { getAndRenderAdvice } from "./fonctions.js";

const btnElement = document.querySelector(".js-btn");

btnElement.addEventListener("click", async () => {
  getAndRenderAdvice();
});
