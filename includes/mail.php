<?php 

// $_POST['message']." ".$_POST['name']." ".$_POST['email']
use PHPmailer\PHPmailer\PHPMailer;
use PHPmailer\PHPmailer\Exception;

require "../phpmailer/src/Exception.php";
require "../phpmailer/src/PHPMailer.php";
require "../phpmailer/src/SMTP.php";

if(isset($_POST['email'])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'matcalabs0012@gmail.com'; // Your gmail
    $mail->Password = 'fugfcyphbczopaai'; // Your gmail app password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
  
    $mail->setFrom($_POST["email"]); // Your gmail
  
    $mail->addAddress('matt@usource.me');
  
    $mail->isHTML(true);
  
    $mail->Subject = $_POST["name"] . " - Send a Message from Portfolio";
    $mail->Body = "NAME:".$_POST["name"]."<br>"."FROM: ".$_POST["email"]."<br>"."MESSAGE: ".$_POST["message"];
  
    $mail->send();
  
    echo "send gago";
  }
?>