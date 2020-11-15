const statsForm = $(".statsForm");
const name = $(".name");
const goals = $(".goals");
const assists = $(".assists");
const gamesPlayed = $(".gamesPlayed");
const pageDiv = $(".pageDiv");
const resultDiv = $(".resultDiv");

const coreyResults = [
  {
    games: 81,
    goals: 102,
    assists: 46,
  },
];
const coreysCont = 1.827;

statsForm.submit(function (event) {
  event.preventDefault();
  clearDisplay();
  const nameInput = name.val();
  const goalsInput = parseInt(goals.val());
  const assistInput = parseInt(assists.val());
  const gamesPlayedInput = parseInt(gamesPlayed.val());
  resultDiv.append(
    statCalculator(nameInput, goalsInput, assistInput, gamesPlayedInput)
  );
});

function statCalculator(name, goals, assists, games) {
  let result = (goals + assists) / games;
  if (result > coreysCont) {
    resultDiv.addClass("orange");
    return `
    <h2 class="resultHeader">Maybe</h2>
    <p>Well, ${name} you might have better stats but im still better. 1v1 Me<p> 
    `;
  } else {
    resultDiv.addClass("red");
    return `
    <h2 class="resultHeader">Never!</h2>
    <p>Sorry ${name} you could never be better than me <p> 
    `;
  }
}

function clearDisplay() {
  resultDiv.empty();
}
