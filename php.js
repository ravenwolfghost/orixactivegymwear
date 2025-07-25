<?php
if ($_SERVER["Submit Order"] == "POST") {
    $to ="https://formsubmit.co/el/lahufi";
    $subject = "New Order Received";
    $orderDetails = print_r($_POST, true);
    $headers = "From: orders@yourwebsite.com";

    mail($to, $subject, $orderDetails, $headers);
}
?>
