$(document).ready(function () {

    var fname = "";
    var lname = "";
    var email = "";
    var password = "";
    var repassword = "";
    var gender = "";
    var website = "";


    $("#fname").keyup(function () {


        var vall1 = $(this).val();
        var vall = vall1.charAt(0).toUpperCase() + vall1.slice(1);
        console.log(vall);
        if(vall === ""){

            $("#fnameerror").html("<span style='color:red;'>Please Enter Your First Name</span>");
            fname="";
        }
        else if (vall.length < 3){

            $("#fnameerror").html("<span style='color:red;'>First Name is Too Short</span>");
            fname="";

        }
        else
            {
                $("#fnameerror").html("<span style='color:lightseagreen;'>Awesome!</span>");
                fname=vall;
                console.log(fname);

            }
    });

    $("#lname").keyup(function () {

    var vall1 = $(this).val();
    var vall = vall1.charAt(0).toUpperCase() + vall1.slice(1);
    console.log(vall);
    if(vall == ""){

        $("#lnameerror").html("<span style='color:red;'>Please Enter Your Last Name</span>");
        lname="";
    }
    else if (vall.length < 3){

        $("#lnameerror").html("<span style='color:red;'>Last Name is Too Short</span>");
        lname="";

    }
    else
    {
        $("#lnameerror").html("<span style='color:lightseagreen;'>Awesome!</span>");
        lname=vall;
        console.log(lname);

    }
});

    $("#email").keyup(function () {


        var vall = $(this).val();
        if(vall == ""){

            $("#emailerror").html("<span style='color:red;'>Please Enter A Valid Email</span>");
            email="";

        }
        else if (vall.length < 3){

            $("#emailerror").html("<span style='color:red;'>Email is Too Short</span>");
            email="";

        }
        else
        {

            $.ajax({


                type: 'POST',
                url:'script.php',
                data: "email="+vall,
                success: function(msg){


                    if (msg === "invalid")

                    {

                        $("#emailerror").html("<span style='color:red;'>Email is Invalid. Try Again!</span>");
                        email="";

                    }
                    else if(msg === "exists")

                    {

                        $("#emailerror").html("<span style='color:red;'>Email Already Exists. Try Again!</span>");
                        email="";

                    }

                    else if (msg === "ok") {

                        $("#emailerror").html("<span style='color:lightseagreen;'>Awesome!</span>");
                        email = vall;
                        console.log(email);

                    }


                }


            });


        }


    });

    $("#password").keyup(function () {

        var vall = $(this).val();
        if(vall == ""){

            $("#passworderror").html("<span style='color:red;'>Please Enter A New Password</span>");
            password="";

        }
        else if (vall.length < 9){

            $("#passworderror").html("<span style='color:red;'>Password is Too Short</span>");
            password="";

        }
        else
        {
            $("#passworderror").html("<span style='color:lightseagreen;'>Awesome!</span>");
            password=vall;
            console.log(password);

        }

    });

    $("#repassword").keyup(function () {

        var vall = $(this).val();
        if(vall == ""){

            $("#repassworderror").html("<span style='color:red;'>Please Enter The Same Password Again</span>");
            repassword="";

        }
        else if (password !== vall){

            $("#repassworderror").html("<span style='color:red;'>Passwords Do Not Match. Please Try Again! </span>");
            repassword="";

        }
        else if (password === vall)
        {
            $("#repassworderror").html("<span style='color:lightseagreen;'>Awesome</span>");
            repassword=vall;
            console.log(repassword);

        }

    });

    $("#male").click(function () {

        gender = "Male";
        $("#gendererror").html("<span style='color:lightseagreen;'>Awesome You're A Male!</span>")
        console.log(gender);

    });

    $("#female").click(function () {

        gender = "Female";
        $("#gendererror").html("<span style='color:lightseagreen;'>Awesome You're A Female!</span>")
        console.log(gender);

    });

    $("#website").keyup(function () {


        var vall = $(this).val();
        if(vall == ""){

            $("#websiteerror").html("<span style='color:red;'>Please Enter A Valid Website</span>");
            website="";

        }
        else if (vall.length < 5){

            $("#websiteerror").html("<span style='color:red;'>Website Address Should Be Longer</span>");
            website="";

        }
        else
        {
            $("#websiteerror").html("<span style='color:lightseagreen;'>Awesome!</span>");
            website=vall;
            console.log(website);

        }


    });

    $("#submitbtn").click(function(){



        if(fname === "" || lname === "" || email === "" || password === "" || repassword === "" || gender === "" || website ===""){


            $("#formerror").html("<span style='color:red;'>There Are Errors With Your Submission!</span>");

        }
        else{

            //send data to php script for validation

            var formDiv = $("#form");

            formDiv.html("<img src='loading1.gif' width='200'/>");

            $.ajax({

                type:'POST',
                url: 'script.php',
                data:"fname="+fname+"&lname="+lname+"&email="+email+"&password="+password+"&gender="+gender+"&website="+website,
                success:function (msg) {

                    if(msg ==="done")
                    {
                        $("#form").html(
                            "<div style='color:lightseagreen;'>Congratulations, You Are Now Registered!<br><br><br>" +
                            "<i>Here are your details:</i><br><br>"+
                            "Your First Name is : " +fname+"<br><br>" +
                            "Your Last Name is : " +lname+"<br><br>" +
                            "Your Email is : " +email+"<br><br>" +
                            "Your Gender is : " +gender+"<br><br>" +
                            "Your website is : " +website+"<br><br></div>");
                    }
                    else
                        {
                            $("#form").html("<span style='color:red;'>There was an error. Please try again later!</span>");
                        }

                }


            });

        }




    });

});


