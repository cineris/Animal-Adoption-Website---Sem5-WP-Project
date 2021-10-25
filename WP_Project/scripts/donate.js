function validate() {
    let n = document.getElementById("Name").value;
    let name_regex = /[a-zA-Z]$/;
    if(!n.match(name_regex)) {
        alert("Please enter your Name in correct format");
    }

    let pat = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{3}$/;
    let em=document.getElementById("email").value;
    if(!em.match(pat)) {
        alert("Please enter Email in right format");
    }

    let contact_regex = /^[0-9]{10,10}$/;
    let con = document.getElementById("contact").value;
    if (!con.match(contact_regex)) {
        alert("Please enter your Contact number in right format");
    }

    let add = document.getElementById("address").value;
    if(add == "") {
        alert("Please enter your Address");
    }

    let amount_regex = /[0-9]$/;
    let amt = document.getElementById("amount").value;
    if (!amt.match(amount_regex)) {
        alert("Please enter your amount corectly");
    }

    let reg1 = /^[0-9]{12,12}$/;
        if (!document.getElementById("cardnum").value.match(reg1)) {
            alert("Card Number should be only of 12 digits");
        }

    let reg2 = /^[0-9]{3,3}$/;
    if (!document.getElementById("cvv").value.match(reg2)) {
        alert("CVV should be only of 3 digits");
    }
}


function dropdown(){
    var pay = document.getElementById("mop").value;
    var d = document.getElementById("payment");
    d.innerHTML = "";

    if (pay == "Debit/Credit Card") {
        d.appendChild(document.createElement("br"));
        let lab1 = document.createElement("label");
        let t1 = document.createTextNode("Card Number: ");
        let card1 = document.createElement("input");
        card1.setAttribute("type", "number");
        card1.setAttribute("id","cardnum");
        lab1.setAttribute("for","cardnum");
        lab1.appendChild(t1);
        d.insertBefore(lab1,document.getElementById("cardnum"));
        d.appendChild(card1);
        d.appendChild(document.createElement("br"));
        d.appendChild(document.createElement("br"));


        let lab2 = document.createElement("label");
        let t2 = document.createTextNode("CVV: ");
        let card2 = document.createElement("input");
        card2.setAttribute("type", "number");
        card2.setAttribute("id","cvv");
        lab2.setAttribute("for","cvv");
        lab2.appendChild(t2);
        d.insertBefore(lab2,document.getElementById("cvv"));
        d.appendChild(card2);

    } else if (pay == "Net Banking") {
        d.appendChild(document.createElement("br"));
        let labnb1 = document.createElement("label");
        let tnb1 = document.createTextNode("HDFC Bank");
        let nbradio1 = document.createElement("input");
        nbradio1.setAttribute("type","radio");
        nbradio1.setAttribute("id","rad1");
        labnb1.setAttribute("for","rad1");
        labnb1.appendChild(tnb1);
        d.insertBefore(labnb1,document.getElementById("rad1"));
        d.appendChild(nbradio1);

        d.appendChild(document.createElement("br"));
        let labnb2 = document.createElement("label");
        let tnb2 = document.createTextNode("ICICI Bank");
        let nbradio2 = document.createElement("input");
        nbradio2.setAttribute("type","radio");
        nbradio2.setAttribute("id","rad2");
        labnb2.setAttribute("for","rad2");
        labnb2.appendChild(tnb2);
        d.insertBefore(labnb2,document.getElementById("rad2"));
        d.appendChild(nbradio2);

        d.appendChild(document.createElement("br"));
        let labnb3 = document.createElement("label");
        let tnb3 = document.createTextNode("Axis Bank");
        let nbradio3 = document.createElement("input");
        nbradio3.setAttribute("type","radio");
        nbradio3.setAttribute("id","rad3");
        labnb3.setAttribute("for","rad3");
        labnb3.appendChild(tnb3);
        d.insertBefore(labnb3,document.getElementById("rad3"));
        d.appendChild(nbradio3);

        d.appendChild(document.createElement("br"));
        let labnb4 = document.createElement("label");
        let tnb4 = document.createTextNode("SBI Bank");
        let nbradio4 = document.createElement("input");
        nbradio4.setAttribute("type","radio");
        nbradio4.setAttribute("id","rad4");
        labnb4.setAttribute("for","rad4");
        labnb4.appendChild(tnb4);
        d.insertBefore(labnb4,document.getElementById("rad4"));
        d.appendChild(nbradio4);
    }

}
