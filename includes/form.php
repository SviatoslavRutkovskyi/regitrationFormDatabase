<?php
// database connection code

// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','users');

// get the post records

$userName = $_POST['user-name'];
$email = $_POST['email'];
$password = $_POST['psw'];

// database insert SQL code
$sql = "INSERT INTO `userstbl` (`name`, `email`, `psw`) VALUES ('$userName', '$email', '$password')";

// insert in database 
$rs = mysqli_query($con, $sql);
