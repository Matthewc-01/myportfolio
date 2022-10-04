<!DOCTYPE html>
<html lang="en">
<head>
	<?php include 'includes/head.php';?>
</head>
<body>
	<div id="preloader"></div>
		<?php include 'includes/email-social-icons.php';?>
		<?php include 'includes/header.php';?>
		<!-- SECTIONS -->
		<?php include 'sections/main-banner.php';?>
		<?php include 'sections/about.php';?>
		<?php include 'sections/works.php';?>
		<?php include 'sections/contact.php';?>
		<!-- SECTIONS -->
		<?php include 'includes/contact-popup.php';?>
		<?php include 'includes/footer.php';?>
		
		<div id="success">
			<div class="alert-simple alert-success">
				<div class="img"></div>
			<span class="message-close">&times;</span>
				<div clas="data">
					<h1>success</h1>
					<p>message has been sent!</p>
				</div>
			</div>
		</div>
	



	<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
  <script>
	var loader = document.getElementById("preloader");
	window.addEventListener("load",function(){
		loader.style.display = "none";
	});

	

  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"></script>
	<div class="cursor-outer"></div>
	<div class="cursor-inner"></div>
	<script src="_js/custom.js"></script>
	<script src="_js/text-scramble.js" async></script>
	<script src="_js/modal.js" defer></script>
	<script src="_js/contact-popup.js" defer></script>
	<script defer>
	   $("#success").hide();
       $(".message-close").click(function () { 
		$("#success").fadeOut(1000);
	   });

	   $("#success").click(function () { 
		$("#success").fadeOut(1000);
		});
	</script>
</body>
</html>