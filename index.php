<?php
?>

<html>

<head>


    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="jquery-3.4.1.min.js"></script>
    <script src="validation.js"></script>

</head>

<body>

<div id="form">
    <h4 style="padding-bottom: 10px">Create An Account</h4>

        <input class="input capitalize" type="text" id="fname" name="fname" placeholder="First Name">
        <div  class="errors" id="fnameerror"></div>
        <input class="input capitalize" type="text" id="lname" name="lname" placeholder="Last Name">
        <div  class="errors" id="lnameerror"></div>
        <input class="input" type="email" id="email" name="email" placeholder="Email">
        <div  class="errors" id="emailerror"></div>
        <input class="input" type="password" id="password" name="password" placeholder="Password">
        <div  class="errors" id="passworderror"></div>
        <input class="input" type="password" id="repassword" name="repassword" placeholder="Password Again">
        <div  class="errors" id="repassworderror"></div>
        <label class="container">Male
            <input type="radio" name="gender" id="male" value="male">
            <span class="checkmark"></span>
        </label>
        <label class="container">Female
            <input type="radio" name="gender" id="female" value="female">
            <span class="checkmark"></span>
        </label>
        <div  class="errors" id="gendererror"></div>
        <input class="input" type="text" id="website" name="website" placeholder="Website">
        <div class="errors"id="websiteerror"></div>
        <input type="button" id="submitbtn" value="Register">
        <div class="errors" id="formerror"></div>


</div>

</body>

</html>
