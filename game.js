   function send(){
       number1= document.getElmentById("number1").value;
       number2= document.getElmentById("number2").value;
       actual_answer =parseInt(number1) * parseInt(number2)
   }
   question_number = "<h4>"+ number1 + "x" + number2 +"<h4>";
   input_box= "<br>Answer : <inputtype ='text' id='input_check_box'>";
   check_button ="<br><br> <button class= 'btn_btn-info' onclick 'check()'>Check</button>";
   row =question_number + input_box + check_button;
    document.getElmentById("output").innerHTMl =row;
        document.getElmentById("number2").value = "";
       document.getElmentById("number1").value = "";
       question_turn ="player1"
answer_turn="player2"
function check(){
    get_answer=document.getElementById("input_check_box").value
    answer=get_answer.toLowerCase()
    if(answer==word)
    {
        if(answer_turn=="player1"){
            player1_score=player1_score+1
            document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML=player2_score   
        }
    }
    
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML='question turn: ' + player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML='question turn: ' + player1_name
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML='answer turn: ' + player2_name
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML='answer turn: ' + player1_name
    }
    document.getElementById("output").innerHTML=""
       