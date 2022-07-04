// https://apply-form.herokuapp.com/api/apply/alienName

document.getElementById("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const alienName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://apply-form.herokuapp.com/api/apply/${alienName}`
    );
    const data = await response.json();

    console.log(data);
    document.getElementById("name").innerText = data.name;
    document.getElementById("alienName").innerText = data.speciesName;
    document.getElementById("alienWorld").innerText = data.homeworld;
    document.getElementById("alienFeatures").innerText = data.features;
    document.getElementById("alienFacts").innerText = data.interestingFact;
    document.getElementById("alienExamples").innerText = data.notableExamples;
    document.getElementById("img").src = data.image;
    document.getElementById("alienCaption").innerText = data.speciesName;
  } catch (error) {
    console.log(error);
  }
}
