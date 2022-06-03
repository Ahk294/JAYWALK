<!-- 
/* ************************** */
/*                            */
/*        signIn.php          */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */ 
-->

<?php
// including the common.php file to use its functions
include('common.php');

// calling the outputHeader function to display the header content of the page
outputHeader('Sign In');

// calling the outputNavbar function to display the navbar
outputNavbar('Sign In');
?>

<!-- sign in page content -->
<div id="signIn_content" class="content">
    <h1 class="heading">SIGN IN</h1>
    <div class="container" style="margin-top: 100px;">
        <div class="signIn_form">
            <form method="POST">
                <div class="form_content">
                    <div class="input_content">
                        <input type="text" id="username" placeholder="Username" name="username" required />
                    </div>
                    <div class="input_content">
                        <input type="password" id="pass" placeholder="Password" name="pass" required />
                    </div>
                    <div class="input_content">
                        <input type="submit" value="SIGN IN" class="btn_form" onclick="checkUser(event)" />
                    </div>
                    <div class="account_conf">
                        <p>
                            Don't have an account? <a href="./register.php">Sign Up!</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<?php
// calling the outputFooter function to display the footer content of the page
outputFooter('Sign In');
?>