export async function getAndRenderAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const objectSlip = await response.json();

    const advice = objectSlip.slip.advice;
    const adviceId = objectSlip.slip.id;

    document.querySelector(".js-id").innerHTML = adviceId;
    document.querySelector(".js-advice").innerHTML = advice;
  } catch (error) {
    document.querySelector(".js-id").innerHTML = adviceId;
    document.querySelector(".js-advice").innerHTML =
      "Unexpected error. Try again later";
  }
}
