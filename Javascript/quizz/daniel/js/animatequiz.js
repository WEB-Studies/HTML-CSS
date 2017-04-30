var user_data;

user_data = {
    name: 0,
    score: 0
};


question_number = 0;
$( document ).ready(function() {


    console.log("Begin!");
    user_data.name = prompt("Digite o seu nome: ");
    user_data.score = 0;

    console.log(question_array);
    send_question(question_array[question_number]);

 });




$('#next_button').click(function(){
    var selected_option = ($("input[name=option_choice]:checked","#options_form").val());
    if(selected_option) {
        if (parseInt(selected_option) === question_array[question_number].correct_answer) {
            user_data.score++;
            alert("Acertou Miseravi!!!");
        }
        question_number++;
        if (question_number === question_array.length) {
            alert("Parabéns " + user_data.name + "\nVocê terminou com " + user_data.score + " pontos!");
        }
        else {
            send_question(question_array[question_number]);
        }
    }
});

function send_question(q) {
    console.log("Sending question" + q.question);
    var $question_container = document.getElementById("question");
    console.log($question_container);
    //Send question
    $question_container.innerHTML =  "<p>" + q.question + "</p>";

    //send options
    $options_container = document.getElementById("options_form");
    var options_string = "";
    for(var i=0; i<q.options.length; i++){
        options_string+= "<input type='radio' name='option_choice' value='"+ i.toString() + "' id='option"+i.toString()+"'>" + q.options[i] + "<br>";
    }
    $options_container.innerHTML = options_string;
}

