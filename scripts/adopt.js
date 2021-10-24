function validate()
{
    let name_validate=document.getElementById("name").value;
    let number_validate=document.getElementById("no").value;
    let email_validate=document.getElementById("em").value;
    let flag=0;

    let number_check = /^[0-9]{10,10}$/
    if (!number_check.test(number_validate))
    {
        flag=1;
       //alert("Please enter a 10 digit phone number only");
    }


    let name_check = /^[a-zA-Z].{1,}$/;
    if(!name_check.test(name_validate))
    {
        flag=2;
      // alert("Please enter alphabets only");
    }

    
    if(flag==0)
    {
        alert("Hey "+name_validate+"\nYou have successfully applied for adoption. \nWe wil contact you on your email id :"+email_validate+" OR \nyour mobile number :"+number_validate+" very soon. \nThank You ");

    }
    else if(flag==1)
    {
            alert("Please enter a 10 digit phone number only");
        }

    else
    {
            alert("Please enter alphabets only");

    }

}
