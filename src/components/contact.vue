<template>
	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered mt-3">Contact Me (In progess...)</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<form class="box" action="" method="post">
						<o-field label="Subject">
							<o-input required hasCounter></o-input>
						</o-field>

						<o-field label="Name">
							<o-input required></o-input>
						</o-field>

						<o-field label="Email">
							<o-input type="email" required></o-input>
						</o-field>

						<o-field label="Message">
							<o-input type="textarea" required></o-input>
						</o-field>

						<o-field grouped>
							<o-button nativeType="submit" variant="primary" rounded disabled>Send</o-button>
							<o-button nativeType="reset" rounded>Reset</o-button>
						</o-field>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>