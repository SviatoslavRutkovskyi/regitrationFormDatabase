<?php
include 'header.php';


?> 


    <div class = 'container'>
    <h1>Registeration</h1>
    <form class="register-form" method="POST" action="form.php">

      <p>Please enter your information below</p>
      <hr />

      <div class="field">
      <label for "user-name"><b>UserName</b></label>
      <input type="text" placeholder="Your name" name = "user-name" id = 'user-name' required/>
      <small></small>
    </div>

    <div class="field">
      <label for "email"><b>Email Adress</b></label>
      <input type="text" placeholder="example@mail.com" name = "email" id = 'email' required/>
      <small></small>
    </div>

    <div class="field">
      <label for "psw"><b>Password</b></label>
      <input type="password" placeholder="password" name = "psw" id = 'psw' required/>
      <small></small>
    </div>

      <div class="field">
      <label for "cpsw"><b>Confirm Password</b></label>
      <input type="password" placeholder="password" name = "cpsw" id = 'cpsw' required/>
      <small></small>
    </div>


      <hr />

        <!-- <button class="btn registerbtn" >Register</button> -->

      <button class="btn registerbtn" type="submit">Register</button>
                
      <p class="message">
        Already Registered? <a href ="#">Login</a>
      </p>

    </form>

    <form class="login-form">

      <label for "em"><b>Email Adress</b></label>
      <input type="text" placeholder="example@mail.com" name = "emLogin" id = 'emLogin' required/>

      <label for "psw"><b>Password</b></label>
      <input type="password" placeholder="password" name = "pswLogin" id = 'pswLogin' required/>

      <button class="btn loginbtn" type="submit" >Login</button>

      <p class="message">
        Don't have an account? <a href ="#">Register</a>
      </p>
    </form>


  </div>

  <script src="script.js"></script>
  </body>
</html>
