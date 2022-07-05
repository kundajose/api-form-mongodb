// https://apply-form.herokuapp.com/api/apply/alienName

document.getElementById("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const alienName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `http://localhost:7500/api/apply/${alienName}`
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("alienName").innerText = data.speciesName;
    document.getElementById("alienWorld").innerText = data.homeworld;
    document.getElementById("alienFeatures").innerText = data.features;
    document.getElementById("alienFacts").innerText = data.interestingFact;
    document.getElementById("alienExamples").innerText = data.notableExamples;
    document.getElementById("alienImage").src = data.image;
    // document.getElementById("alienCaption").innerText = data.alienC;
  } catch (error) {
    console.log(error);
  }
}
