<!-- 
/* ************************** */
/*                            */
/*       register.php         */
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
outputHeader('Register');

// calling the outputNavbar function to display the navbar
outputNavbar('Register');
?>

<!-- register page content -->
<div id="register_content" class="content">
    <h1 class="heading">REGISTER</h1>
    <div class="wrapper">
        <div class="container">
            <div class="registration_form">
                <form id="reg_form" name="reg_form" method="POST">
                    <div class="form_content">
                        <div class="input_group">
                            <div class="input_content">
                                <input type="text" id="fname" name="fname" placeholder="First Name" required />
                            </div>
                            <div class="input_content">
                                <input type="text" id="lname" name="lname" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div class="input_group">
                            <div class="input_content">
                                <input type="text" id="username" name="username" placeholder="Username" required />
                            </div>
                            <div class="input_content">
                                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                            </div>
                        </div>
                        <div class="input_content">
                            <input type="email" name="email" id="email" placeholder="Email Address" required />
                        </div>
                        <p id="status"></p>
                        <div class="input_content">
                            <label id="gender_label">Gender</label>
                            <ul>
                                <li>
                                    <label class="radio_content">
                                        <input type="radio" name="gender" value="male" class="input_radio" checked />
                                        <span>Male</span>
                                    </label>
                                </li>
                                <li>
                                    <label class="radio_content">
                                        <input type="radio" name="gender" value="female" class="input_radio" />
                                        <span>Female</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="input_group">
                            <div class="input_content">
                                <input type="password" id="pass" name="pass" placeholder="Password" onchange="confirmPassword()" required />
                            </div>
                            <div class="input_content">
                                <input type="password" id="pass-repeat" name="pass-repeat" placeholder="Confirm Password" onchange="confirmPassword()" required />
                            </div>
                        </div>
                        <div class="input_content">
                            <input type="submit" value="REGISTER" class="btn_form" onclick="addUser(event)" />
                        </div>
                        <div class="account_conf">
                            <p>
                                Already have an account? <a href="SignIn.php">Sign In!</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <i id="check_mark" class="far fa-check-circle pass_check"></i>
        <i id="cross_mark" class="far fa-times-circle pass_check"></i>
    </div>
</div>

<?php
// calling the outputFooter function to display the footer content of the page
outputFooter('Register');
?>