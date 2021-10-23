<?php
    if (isset($_POST['submit'])){
        $email = $_POST['email'];
        $pass1 = $_POST['password'];
    }

    $dbHost = 'localhost'; //or localhost
    $dbName = 'register'; // your db_name
    $dbUsername = 'root'; // root by default for localhost
    $dbPassword = '';  // by default empty for localhost

    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected Successfully";

    $sql="SELECT email_id from registrations WHERE email_id='$email'";
    if(mysqli_query($conn,$sql))
    {
        $sql="SELECT password from registrations WHERE email_id='$email'";
        if(mysqli_query($conn,$sql)==$pass1)
        {
            echo "<script>('You have succesfully logged in.');</script>";

         }
         else
         {
            echo "<script>alert('Wrong login or password');</script>";
            echo "<noscript>Wrong login or password</noscript>";

         }
    }

?>