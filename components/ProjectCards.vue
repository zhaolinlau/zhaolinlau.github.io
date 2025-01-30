<script setup>
const projects = useProject()
</script>

<template>
	<div class="grid grid-cols-12 gap-3 mt-3">
		<Card class="lg:col-span-6 col-span-12" v-for="project in projects">
			<CardHeader>
				<CardTitle>
					{{ project.title }}
				</CardTitle>

				<CardDescription>
					<Badge v-for="tag in project.tags">
						{{ tag }}
					</Badge>
				</CardDescription>
			</CardHeader>

			<CardContent>
				<NuxtImg :src="`/img/${project.src}`" placeholder />
			</CardContent>

			<CardFooter class="grid grid-cols-12">
				<Button as-child variant="outline" class="col-span-6">
					<NuxtLink :to="project.domain" class="flex items-center justify-center" target="_blank">
						<Icon name="mdi:eye" /> Preview
					</NuxtLink>
				</Button>

				<Button as-child variant="outline" class="col-span-6" v-if="project.public">
					<NuxtLink :to="project.repo" class="flex items-center justify-center" target="_blank">
						<Icon name="mdi:github" /> Source Code
					</NuxtLink>
				</Button>

				<Button as-child variant="outline" class="col-span-6" v-if="!project.public" disabled>
					<div class="flex items-center justify-center">
						<Icon name="mdi:lock" /> Private
					</div>
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>