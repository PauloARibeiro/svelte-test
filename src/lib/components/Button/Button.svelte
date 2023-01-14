<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes;

	console.log($$slots);
	console.log($$props.$$slots);
</script>

<button class="primary" {...$$restProps}>
	{#if $$props.$$slots.label}
		<slot name="label" />
	{/if}
</button>

<style lang="scss">
	.primary {
		@apply bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-medium py-1 px-5 rounded transition-colors;
	}

	.error {
		@apply bg-error-500 hover:bg-error-600 active:bg-error-700 text-white font-medium py-1 px-5 rounded transition-colors;
	}

	.success {
		@apply bg-success-500 hover:bg-success-600 active:bg-success-700 text-white font-medium py-1 px-5 rounded transition-colors;
	}
</style>
