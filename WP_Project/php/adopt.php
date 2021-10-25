<?php
    if (isset($_POST['submit'])){
        $name = $_POST['name1'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $petname = $_POST['petname'];
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

    $sql = "CREATE TABLE if not exists adopt(
        name VARCHAR(30) NOT NULL,
        email_id VARCHAR(30) NOT NULL PRIMARY KEY,
        phone_number NUMERIC NOT NULL,
        petname VARCHAR(50) NOT NULL)";

    if(mysqli_query($conn, $sql))
    {
        echo "<br>Table created successfully</br>";
    }
    else
    {
        echo "ERROR: Could not create table " . mysqli_error($conn);
    }
    /*
    $sql = "DELETE FROM adopt"; // run these two lines to clear table
    mysqli_query($conn, $sql);
    */
    $sql = "INSERT INTO adopt VALUES ('$name','$email','$number','$petname')";
    if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
         }
    else
    {
        echo "ERROR: Could not insert values " . mysqli_error($conn);
        
}
 ?>
