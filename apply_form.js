var counter = 2;
var limit = 4;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<b>Question</b>" + (counter + 1) + "<br><textarea name='myInputs[]'></textarea><br><br>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}

/*
var counterText = 0;
var counterRadioButton = 0;
var counterCheckBox = 0;
var counterTextArea = 0;
function addAllInputs(divName, inputType){
     var newdiv = document.createElement('div');
     switch(inputType) {
          case 'text':
               newdiv.innerHTML = "Ans:" + (counterText + 1) + " <br><input type='text' name='myInputs[]'>";
               counterText++;
               break;
          case 'radio':
               newdiv.innerHTML = "Ans:" + (counterRadioButton + 1) + " <br><input type='radio' name='myRadioButtons[]'>";
               counterRadioButton++;
               break;
          case 'checkbox':
               newdiv.innerHTML = "Ans:" + (counterCheckBox + 1) + " <br><input type='checkbox' name='myCheckBoxes[]'>";
               counterCheckBox++;
               break;
          case 'textarea':
	       newdiv.innerHTML = "Ans:" + (counterTextArea + 1) + " <br><textarea name='myTextAreas[]'>type here...</textarea>";
               counterTextArea++;
               break;
          }
     document.getElementById(divName).appendChild(newdiv);
}
*/
/*
$(document).ready(function(){
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
});
*/