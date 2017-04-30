/**
 * Created by j3r3mias on 4/29/17.
 */

var score = 0;
var totalQuestions = allQuestions.length;

$('document').ready(function(){
    var ans = 0;
    $('#start-button').click(function(){
        this.remove();
        var quiz = '<div class="options"></div>'
        quiz += '<div class="next"><button type="button" id="next-button">Próxima Questão!!!</button></div>'
        quiz += '<div class="footer">Eu sou o rodape!</div>'
        $('body').append(quiz);
        ans = sendQuestion();
        console.log('Next adicionado!');
    });

});

$('.next').on('click', "#next-button", function(){
    console.log('lol');
});

// $('#next-button').click(function() {
//     console.log('Fui clicado!!!');
//     //var option = $('input[name="option"]:checked', "options").val();
//     //console.log('Escolhido: ' + option)
// });



function sendQuestion() {
    do {
        num = Math.floor(Math.random() * totalQuestions);

    } while (allQuestions[num].done === true);

    var questionDescription = $('.question-description');
    questionDescription.remove();

    var question = $('.question');
    question.append('<p class="question-description"> <span> Complete a frase: </span>'+ allQuestions[num].question + '</p>');
    var options = $('.options');
    for (var i = 0; i < allQuestions[num].choices.length; i++) {
        //console.log(allQuestions[num].choices[i]);
        options.append('<input type="radio" name="option">' + allQuestions[num].choices[i] + '<br>');
    }
    //console.log(question);
};