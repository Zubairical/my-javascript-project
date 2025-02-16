<?php
// check_date.php
header('Content-Type: application/json');

// Manually set your cutoff date in "Y-m-d" format.
// Update this date manually when you want the redirection to occur.
$cutoffDate = "2026-02-16";

// Get today's date.
$today = date("Y-m-d");

// If today's date is on or after the cutoff date, signal a redirect.
if ($today >= $cutoffDate) {
    echo json_encode(["redirect" => true]);
} else {
    echo json_encode(["redirect" => false]);
}
?>
