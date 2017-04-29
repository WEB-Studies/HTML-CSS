/**
 * Created by j3r3mias on 4/29/17.
 */
var allQuestions = [
    {
        question: 'Puta falta de...',
        choices: ['sacanagem', 'amor', 'maconha', 'baitolagem'],
        correctAnser: 0
    },
    {
        question: 'Tah saindo da jaula o...',
        choices: ['monstro', 'gorila', 'tigre', 'leao'],
        correctAnser: 0
    },
    {
        question: 'Cabalo imundo...',
        choices: ['e chato', 'noob', 'do caralho', 'do diabo'],
        correctAnser: 2
    }
];

$('document').ready(function(){
    var ans = 0;
    $('button').click(function(){
        this.remove();
        $('body').append('<div class="options"></div>')
        ans = sendQuestion();
    });
});

function sendQuestion() {
    num = Math.floor(Math.random() * allQuestions.length);

    console.log('Questão: ' + num);
    var question = $('.question');
    question.append('<p> <span> Complete a frase: </span>'+ allQuestions[num].question + '</p>');
    var options = $('.options');
    for (var i = 0; i < allQuestions[num].choices.length; i++) {
        console.log(allQuestions[num].choices[i]);
        options.append('<input type="radio" name="option"><' + allQuestions[num].choices[i] + '<br>');
    }
    console.log(question);
};