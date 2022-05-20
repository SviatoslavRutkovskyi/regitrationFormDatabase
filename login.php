<?php
include 'header.php';


?> 


    <div class = 'container'>
    <h1>Log in</h1>

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
