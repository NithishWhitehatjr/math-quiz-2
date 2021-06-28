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
       