<?php
// Отримання даних з форм
$first_name = htmlspecialchars($_POST['first_name']);
$service_type = htmlspecialchars($_POST['service_type']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);

// Вкажіть електронну пошту, на яку відправлятимуться дані
$to = "nerfall10@gmail.com"; // Замініть на вашу адресу
$subject = "New Form Submission";

// Формат повідомлення
$message = "
    <html>
    <head>
        <title>New Form Submission</title>
    </head>
    <body>
        <h2>Form Details:</h2>
        <p><strong>First Name:</strong> $first_name</p>
        <p><strong>Type of Service:</strong> $service_type</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
    </body>
    </html>
";

// Заголовки для відправки HTML-листа
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <$email>" . "\r\n";

// Відправка листа
if (mail($to, $subject, $message, $headers)) {
    // Перенаправлення на сторінку подяки
    header("Location: thanks.html");
    exit();
} else {
    echo "Error: Unable to send your message. Please try again later.";
}
?>