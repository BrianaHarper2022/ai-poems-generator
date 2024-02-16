function displayPoem(response) {
  

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "a94b5f688aoee508a9b7fca6t23274ef";
    let prompt = `User instructions: Generate a 4 line poem about ${instructionsInput.value}.`;
    let context =
      "You are the master of poems. Generate a poem in basic HTML following the user instructions. Use <br /> after each line. The poem will NOT have titles. Sign the poems with `<br /><strong>SheCodes AI<strong>`";
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      axios.get(apiUrl).then(displayPoem); 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);