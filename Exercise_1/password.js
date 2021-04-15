function validate(){
    
    var word1 = document.getElementById("password1");
    var word2 = document.getElementById("password2");


    if((word1.value.length < 8) || (word2.value.length < 8)){
        alert("Unverified: Passwords must be greater than 8 characters. Try again.");
    }
    else if(word1.value != word2.value){
        alert("Unverified: Passwords do not match. Try again.");
    }
    else{
        alert("Password is verified!");
    }

    
}
