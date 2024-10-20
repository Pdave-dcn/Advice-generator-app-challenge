const btnElement = document.querySelector(".js-btn");

btnElement.addEventListener("click", async () => {
  const response = await fetch("https://api.adviceslip.com/advice");

  const objectSlip = await response.json();

  const advice = objectSlip.slip.advice;
  const adviceId = objectSlip.slip.id;

  console.log(advice);
  console.log(adviceId);
});
