<script setup>
const projects = useProject()
</script>

<template>
	<div class="fixed-grid has-1-cols-mobile">
		<div class="grid">
			<div class="cell" v-for="project in projects">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							<span>{{ project.title }}</span>
						</p>
					</header>

					<div class="card-image">
						<figure class="image">
							<NuxtImg :src="`img/${project.src}`" placeholder />
						</figure>
					</div>

					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<span class="tag m-1 is-info" v-for="tag in project.tags">
									{{ tag }}
								</span>
							</div>
						</div>
					</div>

					<footer class="card-footer">
						<NuxtLink :to="project.domain" class="card-footer-item has-text-primary" target="_blank">
							<span class="icon-text">
								<span class="icon">
									<Icon name="mdi:eye" />
								</span>
								<span>Preview</span>
							</span>
						</NuxtLink>

						<NuxtLink :to="project.repo" class="card-footer-item has-text-info" target="_blank" v-if="project.public">
							<span class="icon-text">
								<span class="icon">
									<Icon name="mdi:github" />
								</span>
								<span>Source Code</span>
							</span>
						</NuxtLink>

						<div class="card-footer-item is-unselectable" v-if="!project.public">
							<span class="icon-text">
								<span class="icon">
									<Icon name="mdi:lock" />
								</span>
								<span>Private</span>
							</span>
						</div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</template>