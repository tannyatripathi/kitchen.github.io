function formerror(){
    element = document.getElementById(id);
    element = document.getElementsByClassName('error')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    var name = document.forms['tform']['tname'].value;
    if(name.length < 5){
        formerror("name" , "*Name Section Cannot be Empty");
        returnval = false;
    }
    return returnval;
}