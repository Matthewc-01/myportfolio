<!DOCTYPE html>
<html lang="en">
<head>
<?php include 'includes/head.php';?>

</head>
<body>
    <div class="container">
        <a class="btn">success</a>
    </div>

    <div class="success">
        <div class="alert-success">
            <div class="img"></div>
        <span class="message-close">&times;</span>
            <div clas="data">
                <h1>success</h1>
                <p>message has been sent!</p>
            </div>
        </div>
    </div>

    <?php include 'includes/footer.php';?>
    <div class="cursor-outer"></div>
	<div class="cursor-inner"></div>
    <script src="_js/custom.js"></script>
    <script>
        $(document).ready(function () {
            $("#success").hide();
            alert("test");
        });
    </script>
</body>
</html>

