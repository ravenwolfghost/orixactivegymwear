<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "festuskendrick3.com";
    $subject = "New Order Received";
    $orderDetails = print_r($_POST, true);
    $headers = "https://6889684b751ed3af7d066c76--orixactivegymwear.netlify.app";

    mail($to, $subject, $orderDetails, $headers);
}
?>
