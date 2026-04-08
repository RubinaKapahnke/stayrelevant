<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    $data = $_POST;
}

$topic = trim((string)($data['topic'] ?? ''));
$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$organization = trim((string)($data['organization'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$consent = filter_var($data['consent'] ?? false, FILTER_VALIDATE_BOOL);
$website = trim((string)($data['website'] ?? ''));

if ($website !== '') {
    echo json_encode([
        'ok' => true,
        'message' => 'Vielen Dank. Ihre Anfrage wurde versendet.'
    ]);
    exit;
}

if ($topic === '' || $name === '' || $message === '' || strlen($message) < 20 || !$consent) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Bitte füllen Sie alle Pflichtfelder vollständig aus.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    ]);
    exit;
}

$recipient = 'info@stayrelevant-academy.de';
$subject = sprintf('Kontaktanfrage Website: %s', $topic);
$bodyLines = [
    'Neue Anfrage über das Kontaktformular von stayrelevant-academy.de',
    '',
    'Thema: ' . $topic,
    'Name: ' . $name,
    'E-Mail: ' . $email,
    'Telefon: ' . ($phone !== '' ? $phone : 'nicht angegeben'),
    'Unternehmen / Organisation: ' . ($organization !== '' ? $organization : 'nicht angegeben'),
    '',
    'Nachricht:',
    $message,
    '',
    'Versendet am: ' . date('d.m.Y H:i:s')
];

$body = implode("\r\n", $bodyLines);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Stay Relevant Academy <info@stayrelevant-academy.de>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$sent = mail($recipient, $encodedSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Die Anfrage konnte serverseitig nicht versendet werden. Bitte versuchen Sie es später erneut.'
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Vielen Dank. Ihre Anfrage wurde versendet und wir melden uns zeitnah bei Ihnen.'
]);
