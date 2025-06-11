let score = 0;
console.log("Quiz application");
console.log("------------------------------------");
const questions = [
    {
        question: "What is the capital of France?",
        options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
        answer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Venus"],
        answer: "B"
    },
    {
        question: "What is 2 + 2?",
        options: ["A. 3", "B. 4", "C. 5", "D. 6"],
        answer: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
        answer: "D"
    }
];



 for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        const userAnswer = prompt(currentQuestion.question);

        if (userAnswer && userAnswer.toLowerCase() == currentQuestion.answer.toLowerCase()) {
            console.log("Correct!");
            score++;
        } else {
            console.log('Wrong! The correct answer was: ${currentQuestion.answer}');
        }
        
    }

    console.log('Quiz finished! You scored ${score} out of ${questions.length}.');