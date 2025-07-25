<?php
if ($_SERVER["Submit Order"] == "POST") {
    $to = "festuskendrick3@gmail.com";
    $subject = "New Order Received";
    $orderDetails = print_r($_POST, true);
    $headers = "From: orders@yourwebsite.com";

    mail($to, $subject, $orderDetails, $headers);
}
?>
