<template>
	<BackTop />
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<p class="subtitle">Hello! I am</p>
				<p class="title is-1 is-italic">Zhaolin Lau</p>
				<p class="subtitle is-3">
					A Passionate Web Developer From Malaysia
				</p>
				<div class="buttons">
					<o-button tag="a" variant="dark" href="https://github.com/zhaolinlau" target="_blank">
						<span class="icon-text">
							<o-icon pack="fab" size="medium" icon="github"></o-icon>
							<span>GitHub</span>
						</span>
					</o-button>
					<o-button tag="a" variant="link" href="https://www.facebook.com/zhaolinlau/" target="_blank">
						<span class="icon-text">
							<o-icon pack="fab" size="medium" icon="facebook"></o-icon>
							<span>Facebook</span>
						</span>
					</o-button>
					<o-button tag="a" variant="danger is-light" href="https://www.instagram.com/zhaolin_lau/" target="_blank">
						<span class="icon-text">
							<o-icon pack="fab" size="medium" icon="instagram"></o-icon>
							<span>Instagram</span>
						</span>
					</o-button>
					<o-button tag="a" variant="info" href="https://www.linkedin.com/in/zhaolinlau/" target="_blank">
						<span class="icon-text">
							<o-icon pack="fab" size="medium" icon="linkedin"></o-icon>
							<span>LinkedIn</span>
						</span>
					</o-button>
					<o-button tag="a" variant="light" inverted href="https://twitter.com/zhaolin_lau" target="_blank">
						<span class="icon-text">
							<o-icon pack="fab" size="medium" icon="x-twitter"></o-icon>
							<span>Twitter</span>
						</span>
					</o-button>
				</div>
			</div>
		</div>
	</section>

	<section class="section" id="about">
		<div class="container">
			<p class="title mt-3 has-text-centered">
				<span class="icon-text">
					<o-icon size="medium" icon="information-variant-circle-outline"></o-icon>
					<span>About Me</span>
				</span>
			</p>
			<div class="columns is-multiline is-vcentered">
				<div class="column is-4">
					<figure class="image">
						<nuxt-img class="is-rounded" src="img/me.jpg" alt="LAU ZHAO LIN" />
					</figure>
				</div>
				<div class="column is-8">
					<p class="subtitle has-text-centered">Jack of all trades, master of "some"</p>
					<p class="has-text-justified">
						Web developer with more than <b>3 years</b> of well-rounded experience with a diploma in the field of
						<b>Computer Science</b>, extensive knowledge of modern Web techniques and love for <b>Milo</b>. Looking for an
						opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a
						competitive edge and giving back to the community.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section has-text-centered" id="skills">
		<div class="container">
			<p class="title mt-3">
				<span class="icon-text">
					<o-icon size="medium" icon="code-tags"></o-icon>
					<span>My Skills</span>
				</span>
			</p>

			<SkillCards />
		</div>
	</section>

	<section class="section" id="portfolio">
		<div class="container">
			<p class="title has-text-centered mt-3">
				<span class="icon-text">
					<o-icon size="medium" icon="folder-file"></o-icon>
					<span>My Portfolio</span>
				</span>
			</p>

			<PortfolioCards />
		</div>
	</section>

	<section class="section" id="contact">
		<div class="container">
			<p class="title has-text-centered mt-3">
				<span class="icon-text">
					<o-icon size="medium" icon="mailbox"></o-icon>
					<span>Contact Me</span>
				</span>
			</p>
			<div class="columns">
				<div class="column is-6 is-offset-3">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</template>