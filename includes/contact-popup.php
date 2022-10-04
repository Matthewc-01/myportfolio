<!-- The Modal -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('service_x880th8');
        })();
    </script>
    <script type="text/javascript">
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
				if(!hasValue($("#name").val()) && !hasValue($("#email").val()) && !hasValue($("#message").val())){
				alert("Please make sure all fields are filled in correctly");
				} else if(!isEmail($("#email").val())){
				alert("Please enter valid email address");
				} else{
					emailjs.sendForm('service_1mbvu4k', 'template_70iu4gk', '#contact-form')
					.then(function(response) {
						console.log('SUCCESS!', response.status, response.text);
						$("#name, #email, #message, textarea").val("");
						// alert("Message Sent!");
                        $("#success").show();
					}, function(error) {
						console.log('FAILED...', error);
					});
				}
            });
        }
    </script>
<div id="contact-popup" class="contact-popup">

  <!-- Modal content -->
  <div class="contact-popup-content">
    <span class="contact-popup-close">&times;</span>
    <div class="contact-popup-body">
		
			<form id="contact-form" class="topBefore" action="">
		<h1>say hello!</h1>
		<input type="hidden" name="contact_number">
        <input id="name" type="text" name="user_name" placeholder="name" style="text-transform:lowercase">
        <input id="email" type="email" name="user_email" placeholder="e-mail" style="text-transform:lowercase">
        <textarea id="message" name="message" placeholder="message" style="text-transform:lowercase"></textarea>
        <input id="submit"type="submit" value="send">
<!-- 
		<input type="hidden" name="contact_number">
		<input id="name" type="text" name="name" placeholder="name" style="text-transform:lowercase" />
		<input id="email" type="email" name="email" placeholder="e-mail" style="text-transform:lowercase" />
		<textarea id="message" type="text" name="message" placeholder="message" style="text-transform:lowercase" ></textarea>
			<a id="submit" value="">submit</a> -->
		</form>
    </div>
				
    
  </div>

</div>



					
