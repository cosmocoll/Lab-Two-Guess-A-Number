<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Pick a number</title>
</head>

<body>

    <header>
        <h1>The Pick'A'Numberator
        </h1>
    </header>

    <main>
        <section id="directions">
            <p>Enter a number and outwit the machine! The machine will pick a number between 1 and 20, type your guess below and become evaluated. You have four chances to win.
            </p>
        </section>
        <section id="buttonBox">
            <form>
                <input type="number" name="number" id="userNumber" /> 
                <button type="button" id="myCoolButton">Guess Number</button>
            </form>
        </section>

    </main>

    <footer>
        <span id="attempts">
        </span>
        <br>
        <span id="guess">
        </span>
        <br>
        <span id="results">
        </span>
        <br>
        <span id="lazy">
        </span>
        <br>
        <br>
        <span id="highscore">
        </span>
    </footer>

    <script type="module" src="app.js"></script>
</body>

</html>
