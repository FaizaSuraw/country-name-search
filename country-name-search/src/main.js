import './style.css';

const formNameInput = document.getElementById("text-input");
const submitBtn = document.querySelector(".submit-btn");
const feedBackElement = document.querySelector("#result-container");

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const queryName = formNameInput.value.trim();

  if (queryName === "") {
    feedBackElement.textContent = "Please provide a name";
    return;
  }

  try {
    const response = await fetch(`https://api.nationalize.io/?name=${queryName}`);
    const result = await response.json();

    const { name, country } = result;

    if (country.length === 0) {
      feedBackElement.textContent = `No data found for the name "${name}".`;
      return;
    }

    const { country_id, probability } = country[0];
    const countryName = regionNames.of(country_id);

    feedBackElement.textContent = `${name} is most likely from ${countryName} with ${(probability * 100).toFixed(2)}% certainty.`;
  } catch (error) {
    feedBackElement.textContent = "Error fetching data.";
    console.error(error);
  }
});
