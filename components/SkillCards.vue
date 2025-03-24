<script setup lang="ts">
const skills = useSkill()
</script>

<template>
	<div class="grid grid-cols-12 mt-3 gap-3">
		<Card class="lg:col-span-4 col-span-6 flex flex-col items-center" v-for="skill in skills">
			<CardHeader>
				<CardTitle>
					{{ skill.title }}
				</CardTitle>
			</CardHeader>

			<CardContent>
				<Icon :name="skill.icon" size="3em" />
			</CardContent>
		</Card>
	</div>
</template>