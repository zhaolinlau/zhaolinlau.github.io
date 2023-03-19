<template>
  <section class="section" id="portfolio">
		<div class="container">
			<p class="title has-text-centered mt-3">Portfolio</p>

			<div class="columns is-multiline is-centered">
				<div class="column is-4">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								<span>University Counselling Website</span>
							</p>
						</header>
						<div class="card-content">
							<figure class="image">
								<img
									src="../assets/utmfd.png"
									alt="工大Foundation & Diploma升学辅导站"/>
							</figure>
						</div>
						<footer class="card-footer">
							<a
								href="https://utmfd.vercel.app/"
								class="card-footer-item"
								target="_blank">
								Preview
							</a>
							<a
								href="https://github.com/Luetify/UTM-FD"
								class="card-footer-item"
								target="_blank">
								Source Code
							</a>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  export default {
    name: "PortfolioSection"
  }
</script>
