<?php


    //open db connection
    $con = mysqli_connect("localhost","root","","signup");

    if(mysqli_connect_errno())
    {

        echo "database error";

    }
    //validate email - only once via ajax call from validation.js
    if(isset($_POST['email']) && empty($_POST['fname'])){

        $email = $_POST['email'];

        $email = mysqli_real_escape_string($con, $email);

        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            echo "invalid";
        }
        else
            {

                $result = mysqli_query($con, "SELECT id FROM users WHERE email='$email'");
                if(mysqli_num_rows($result) == 1)


                {

                    echo "exists";

                }
                else
                    {
                        echo "ok";
                    }

            }

    }

//validate all form entries via ajax submit button action from validation.js
if(isset($_POST['fname']) &&
    isset($_POST['lname']) &&
    isset($_POST['email']) &&
    isset($_POST['password']) &&
    isset($_POST['gender']) &&
    isset($_POST['website'])) {

    $fname=ucfirst($_POST['fname']);
    $fname = mysqli_real_escape_string($con, $fname);
    $lname=ucfirst($_POST['lname']);
    $lname = mysqli_real_escape_string($con, $lname);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = md5(mysqli_real_escape_string($con, $_POST['password']));
    $gender = mysqli_real_escape_string($con, $_POST['gender']);
    $website = mysqli_real_escape_string($con, $_POST['website']);

    $date = date("F, d Y");

    $query = "INSERT INTO users(date, fname, lname, email, password, gender, website) VALUES ('$date' , '$fname', '$lname', '$email', '$password', '$gender', '$website')";

    if(mysqli_query($con, $query))

    {

       echo "done";

    }
    else
        {
            echo "error";
        }

    //close db connection

    $con->close();
}

