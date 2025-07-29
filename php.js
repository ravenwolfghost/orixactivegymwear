<?php

if ($_SERVER["Submit Order"] == "POST") {
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Order data
$orderDetails = "
Order ID: $orderId
Customer: $Full names
Email: $email
phone: $phone number
select: $select product
Items: $select size
Address:$select address
";
// SMTP settings (for Gmail)
$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->isSMTP();                                          
    $mail->Host       = 'festuskendrick3@gmail.com';                        
    $mail->SMTPAuth   = true;                                   
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;          
    $mail->Port       = 587;                                      

    //Recipients
    $mail->setFrom('Orixactive Gym Wear');
    $mail->addAddress('recipient-email@example.com', 'Admin'); 

    // Content
    $mail->isHTML(false);                             
    $mail->Subject = 'New Order Placed on Your Website';
    $mail->Body    = "You have received a new order:\n\n" . $orderDetails;

    // Send email
    $mail->send();
    echo 'Order details have been sent to your email!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
if ($orderPlacedSuccessfully) {
    include 'festuskendrick3@gmail.com';  
}
