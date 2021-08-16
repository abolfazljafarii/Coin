let score = [0, 0];

function clickSelect() {
    const randomSelect = Math.floor(Math.random() * 2);

    if (randomSelect === 1) {
        document.getElementById('won').innerHTML = "The Computer Won";
        score[0]++;

    } else {
        document.getElementById('won').innerHTML = "You Won";
        score[1]++;
    }

    let items = document.getElementsByClassName('x');
    if (score[0] === 10) {
        document.getElementById('refresh').style.visibility = "visible";
        document.getElementById('end').innerHTML = "You Lose The Game";
        for (let i = 0; i < items.length; i++) {
            document.getElementsByClassName('x')[i].style.display = "none";
        }
    }
    if (score[1] === 10) {
        document.getElementById('refresh').style.visibility = "visible";
        document.getElementById('end').innerHTML = "You Won The Game";
        for (let i = 0; i < items.length; i++) {
            document.getElementsByClassName('x')[i].style.display = "none";
        }
    }
    document.getElementById('message').innerHTML = "You : " + score[1] + " | " + "Computer: " + score[0];
}