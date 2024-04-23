<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate email address
    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Send email
    $to = "ron.saks@gmx.ch";
    $subject = "New Form Submission";
    $message = "Email: $email";
    $headers = "From: webmaster@example.com";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}
?>
