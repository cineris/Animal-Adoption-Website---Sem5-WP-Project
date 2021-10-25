<?php
    if (isset($_POST['su-submit'])){
        $email = $_POST['email'];
        $pass1 = $_POST['password1'];
        $pass2 = $_POST['password2'];
    }
    if ($pass2 != $pass1){
        echo "Passwords Must Match. Be better.";
        header('location: ../index.html');
    }

    $dbHost = 'localhost'; //or localhost
    $dbName = 'karlo_adopt'; // your db_name
    $dbUsername = 'root'; // root by default for localhost
    $dbPassword = '';  // by default empty for localhost

    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected Successfully";

    $sql = "CREATE TABLE if not exists registrations(
        email_id VARCHAR(30) NOT NULL PRIMARY KEY,
        password VARCHAR(25) NOT NULL)";

    if(mysqli_query($conn, $sql))
    {
        echo "<br>Table created successfully</br>";
    }
    else
    {
        echo "ERROR: Could not create table " . mysqli_error($conn);
    }
    /*
    $sql = "DELETE FROM registrations"; // run these two lines to clear table
    mysqli_query($conn, $sql);
    */
    $sql = "INSERT INTO registrations VALUES ('$email','$pass1')";
    if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
    }
    else
    {
        echo "ERROR: Could not insert values " . mysqli_error($conn);
        
}
 ?>
