<?php
    
    if (isset($_POST['lg-submit'])){
        $email = $_POST['email'];
        $pass1 = $_POST['password'];
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
    echo $email;
    echo $pass1;

    $sql="SELECT password from registrations WHERE email_id='$email'";
    $i=0;
    if($result = mysqli_query($conn, $sql))
    {
        if(mysqli_num_rows($result) > 0)
        {
        
            while($row = mysqli_fetch_array($result))
            {
                    
                   if($pass1==$row['password'])
                   {
                       $i=1;
                   }                  
            
            }
            if($i==1)
            {
                echo "<script>alert('You have succesfully logged in.');</script>";
                   
            }
            else
            {
                echo "<script>alert('Wrong login or password');</script>";
                echo "<noscript>Wrong login or password</noscript>";
            
            }
       
            // Free result set
            mysqli_free_result($result);
        } 
        else
        {
            echo "Please make sure you enter the email id you signed up with";
        }
    }

    else
    {
        echo "Unable to connect to database";
    }

?>

