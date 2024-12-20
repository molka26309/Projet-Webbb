function verif() {
    let score = 0;
    let correctAnswers = [];  // Liste des réponses correctes

    // Vérification de toutes les réponses
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector('input[name=q' + i + ']:checked');
        const correctAnswer = getCorrectAnswer(i); // Obtenir la bonne réponse

        if (selectedOption === null) {
            alert("Choisissez une réponse à la question " + i);
            return false;
        } else {
            const selectedValue = selectedOption.value;
            if (checkAnswer(i, selectedValue)) {
                score++;
            }
            // Ajouter la réponse correcte à la liste, qu'elle soit correcte ou non
            correctAnswers.push('Question ' + i + ': ' + correctAnswer);
        }
    }

    // Affichage du score et des bonnes réponses
    alert("Votre score est " + score + " /10\n" + "Réponses correctes:\n" + correctAnswers.join("\n"));

    // Afficher le bouton "Rejouer"
    document.getElementById('replay-button').style.display = 'block';

    return false;
}

// Fonction pour vérifier la réponse
function checkAnswer(questionNumber, selectedValue) {
    switch (questionNumber) {
        case 1: return selectedValue === "2";  // Joe Biden
        case 2: return selectedValue === "2";  // Paris
        case 3: return selectedValue === "1";  // Victor Hugo
        case 4: return selectedValue === "1";  // 384 400 km
        case 5: return selectedValue === "2";  // Portugais
        case 6: return selectedValue === "2";  // Pacifique
        case 7: return selectedValue === "2";  // Alexander Graham Bell
        case 8: return selectedValue === "2";  // Tokyo
        case 9: return selectedValue === "1";  // Russie
        case 10: return selectedValue === "2"; // Amazone
        default: return false;
    }
}

// Fonction pour obtenir la bonne réponse
function getCorrectAnswer(questionNumber) {
    switch (questionNumber) {
        case 1: return "Joe Biden";
        case 2: return "Paris";
        case 3: return "Victor Hugo";
        case 4: return "384 400 km";
        case 5: return "Portugais";
        case 6: return "Pacifique";
        case 7: return "Alexander Graham Bell";
        case 8: return "Tokyo";
        case 9: return "Russie";
        case 10: return "Amazone";
        default: return "";
    }
}

// Fonction pour réinitialiser le quiz
function replay() {
    // Réinitialiser les boutons radio (désélectionner)
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    // Cacher le bouton "Rejouer"
    document.getElementById('replay-button').style.display = 'none';
}
