export async function getAndRenderAdvice() {
  const idElement = document.querySelector(".js-id");
  const adviceElement = document.querySelector(".js-advice");

  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    const objectSlip = await response.json();

    const advice = objectSlip.slip.advice;
    const adviceId = objectSlip.slip.id;

    idElement.textContent = adviceId;
    adviceElement.textContent = advice;
  } catch (error) {
    idElement.textContent = "N/A";
    adviceElement.textContent = "Unexpected error. Try again later";
  }
}
