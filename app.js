const scoreList = [0, 0];

function clickSelect(params) {
    let coinSide = document.getElementById('coin');
    let message = document.getElementById('message');
    let score = document.getElementById('score');
    let button = document.getElementsByClassName('btn');
    let refresh = document.getElementById('refresh');
    const randomSelect = Math.floor(Math.random() * 2);

    coinSide.classList.remove('d-none');

    if (randomSelect === 0) {
        scoreList[0]++;
        coinSide.innerHTML = `You made the right choice <br> The coin side is ${params[0]}`;
        coinSide.classList.add('bg-success');
        coinSide.classList.remove('bg-danger');

    } else {
        scoreList[1]++;
        coinSide.innerHTML = `You made the wrong choice <br> The coin side is ${params[1]}`;
        coinSide.classList.add('bg-danger');
        coinSide.classList.remove('bg-success');
    }

    if (scoreList[0] === 10) {
        message.innerHTML = "you won the game";
        message.classList.add('bg-success');
    }
    if (scoreList[1] === 10) {
        message.innerHTML = "you lost the game";
        message.classList.add('bg-danger');
    }

    if (scoreList[0] === 10 || scoreList[1] === 10) {
        message.classList.remove("d-none");
        refresh.classList.remove("d-none");
        coinSide.classList.add("d-none");
    }
    score.classList.remove("d-none");
    score.innerHTML = `you : ${scoreList[0]} | computer : ${scoreList[1]}`;

    for (i in button) {
        if (scoreList[0] === 10 || scoreList[1] === 10) {
            button[i].classList.add("d-none");
        }
    };
}