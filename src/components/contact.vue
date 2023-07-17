<template>
	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered mt-3">Contact Me</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<form class="box" action="https://formsubmit.co/c771b3ea7ca4ec5d9aa6e7621c42027e" method="post">

						<input type="hidden" name="_captcha" value="false">

						<input type="hidden" name="_next" value="https://zhaolinlau.vercel.app/">

						<o-field label="Subject">
							<o-input required></o-input>
						</o-field>

						<o-field label="Name">
							<o-input name="name" required></o-input>
						</o-field>

						<o-field label="Email">
							<o-input type="email" name="email" required></o-input>
						</o-field>

						<o-field label="Message">
							<o-input type="textarea" name="message" required></o-input>
						</o-field>

						<o-field grouped>
							<o-button nativeType="submit" variant="primary" rounded>Send</o-button>
							<o-button nativeType="reset" rounded>Reset</o-button>
						</o-field>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>