<script lang="ts">
	export let images: string[] = [];
	export let captions: string[] = [];

	// one continuous marquee text: all captions loop seamlessly (x2 for a gapless loop)
	const marqueeText = [...captions, ...captions].join("　　✦　　");

	let index = 0;
	let visible = true;

	// image carousel runs independently of the caption marquee
	setInterval(() => {
		visible = false;
		setTimeout(() => {
			index = (index + 1) % images.length;
			visible = true;
		}, 450);
	}, 5000);
</script>

<div class="card-base tinted !overflow-visible p-3" style="--card-tint: oklch(0.93 0.08 55)">
	<div class="relative rounded-xl overflow-hidden border-[2.5px] border-[var(--brutal-border)] shadow-[2px_2px_0_0_var(--brutal-shadow)]">
		{#if images.length > 0}
			<img src={images[index]} alt="AI Artwork"
				 class="w-full h-48 lg:h-auto lg:aspect-square object-cover transition-opacity duration-500"
				 class:opacity-0={!visible}
			/>
		{/if}
	</div>
	<div class="relative overflow-hidden mt-3 rounded-lg border-2 border-[var(--brutal-border)] bg-[var(--card-bg)] shadow-[1px_1px_0_0_var(--brutal-shadow)] py-1.5">
		<div class="marquee-track font-bold text-sm text-[var(--sticker-orange)] dark:text-[oklch(0.80_0.13_55)] whitespace-nowrap">
			{marqueeText}
		</div>
	</div>
</div>

<style>
	.marquee-track {
		display: inline-block;
		padding-left: 100%;
		animation: marquee 24s linear infinite;
	}
	@keyframes marquee {
		from { transform: translateX(0); }
		to { transform: translateX(-100%); }
	}
</style>
