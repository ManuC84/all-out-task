import secret from "./config.js";

const submitButton = document.getElementById("submitButton");
const textToTranslate = document.getElementById("translateText");
const displayResult = document.getElementById("displayResult");
const selectedLanguage = document.getElementById("languages");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchApi();
});

const fetchApi = async () => {
  const url = `https://api-free.deepl.com/v2/translate?text=${textToTranslate.value}&target_lang=${selectedLanguage.value}&auth_key=${secret.apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const { translations } = await response.json();
    displayResult.style.display = "block";
    displayResult.innerHTML = translations[0].text;
  } catch (error) {
    displayResult.style.display = "block";
    displayResult.innerHTML = "An error ocurred, please try again";
  }
};
