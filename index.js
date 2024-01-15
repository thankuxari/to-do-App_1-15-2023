
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        //Get user input
        const getInput = document.getElementById("assignment").value;

        //Assignment Container to appendChild
        const container = document.getElementById("assignment-container");

        //Create p element for the input 
        const newInput = document.createElement('p');

        //Create buttonContainer for button styling
        const buttonContainer = document.createElement('div');

        //Create Done Button 
        const doneBtn = document.createElement('button');

        //Create Delete Button
        const deleteBtn = document.createElement('button');


        //Give each new element classes
        newInput.className = "assignment-p";
        buttonContainer.className = "button-container";
        doneBtn.className = "assignment-doneBtn";
        deleteBtn.className = "assignment-deleteBtn";

        //Display Text
        newInput.innerText = getInput;
        doneBtn.innerText = "Done";
        deleteBtn.innerText = "Delete";


        //Append child elements to parent elements
        container.appendChild(newInput);
        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(deleteBtn);
        newInput.appendChild(buttonContainer);


        //Done Button(Line Through Text)
        doneBtn.onclick = () =>{
            newInput.className = "assignment-p-line-through";
        }


        //Delete Button(Delete the assignment)
        deleteBtn.onclick = () => {
            if(newInput){
                newInput.remove();
            }
        }

        //Clear input text when submitted
        document.getElementById("assignment").value="";
    });
});


