<?php
    if (isset($_POST['submit'])){
        $name = $_POST['Name'];
        $email = $_POST['email'];
        $number = $_POST['contact'];
        $address = $_POST['address'];
        $amount = $_POST['amount'];
        $payment_method = $_POST['mop'];
    }

    $dbHost = 'localhost'; //or localhost
    $dbName = 'donate'; // your db_name
    $dbUsername = 'root'; // root by default for localhost
    $dbPassword = '';  // by default empty for localhost

    $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected Successfully";

    $sql = "CREATE TABLE if not exists donations(
        name VARCHAR(30) NOT NULL,
        email_id VARCHAR(30) NOT NULL,
        phone_number NUMERIC NOT NULL,
        address VARCHAR(50) NOT NULL,
        amount NUMERIC NOT NULL),
        payment_method VARCHAR(10) NOT NULL)";

    if(mysqli_query($conn, $sql))
    {
        echo "<br>Table created successfully</br>";
    }
    else
    {
        echo "ERROR: Could not create table " . mysqli_error($conn);
    }
    /*
    $sql = "DELETE FROM donations"; // run these two lines to clear table
    mysqli_query($conn, $sql);
    */
    $sql = "INSERT INTO donations VALUES ('$name','$email','$number','$address','$address','$payment_method')";
    if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
    }
    else
    {
        echo "ERROR: Could not insert values " . mysqli_error($conn);
}
 ?>
