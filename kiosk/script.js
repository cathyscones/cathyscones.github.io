/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learnMore");
  const caseButtons = document.getElementById("caseButtons");

  learnMoreBtn.addEventListener("click", () => {
    learnMoreBtn.style.display = "none";
    caseButtons.classList.remove("hidden");
    setTimeout(() => caseButtons.classList.add("visible"), 10);
  });

  document.getElementById("case1-button").addEventListener("click", () => {
    window.location.href = "case1a.html";
  });

  /*document.querySelectorAll(".case-button").forEach(button => {
    button.addEventListener("click", () => {
      alert(`${button.innerText} clicked! (Future screen)`);
    });
  });
  */
});
