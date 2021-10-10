function validate() {
    var x = document.forms["form"]["Name"].value;
    var y = document.forms["form"]["address"].value;

    let name_regex = /^[a-zA-Z]+$/;
    if(name_regex.test(document.form.Name.value) == false) {
        alert("only alphabetic characters in name!");    
    }
    if (x == "")  {
    window.alert("Name must be filled out properly!");
    }

    let email_regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{3}$/;
    let em=document.getElementById("email").value;
    if(!email_regex.test(em)) {
        alert("Please enter Email in right format");
    }

    let contact_regex = /^[0-9]{10,10}$/;
    let con = document.getElementById("contact").value;
    if (!contact_regex.test(con)) {
        alert("Please enter your Contact number in right format");
    }
    
    if(y == "") {
        alert("Please enter your Address");
    }

    let amount_regex = /^[0-9]$/;
    let amt = document.getElementById("amount").value;
    if (!amount_regex.test(amt)) {
        alert("Please enter your amount corectly");
    }
}