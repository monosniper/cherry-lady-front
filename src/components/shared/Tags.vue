<script setup>
	defineProps({
		data: Array,
		size: {
			type: String,
			default: "default",
		},
		limit: Number,
	})
</script>

<template>
	<div class="tags">
		<TransitionGroup name="list">
			<div
				:class="['tag', `tag--${size}`]"
				:key="item"
				v-for="item in data.slice(0, limit ?? data.length)"
			>{{ item }}</div>
		</TransitionGroup>
	</div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
}
.fade-in-enter-active {
	transition: 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
	transition: 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
	opacity: 0;
}

.tags {
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
}

.tag {
	display: flex;
	align-content: center;
	justify-content: center;
	font-size: 14px;
	padding: 6px 12px;
	border: 1px solid var(--color-accent);
	border-radius: 5px;
}

.tag--small {
	font-size: 12px;
	padding: 3px 5px;
	text-align: center;
	color: var(--color-dark);
}
</style>