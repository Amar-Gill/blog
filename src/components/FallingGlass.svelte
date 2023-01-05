<script lang="ts">
	import DeformingSquares from "./DeformingSquares.svelte";
	import {scaleLinear} from "d3-scale";
	export let width: number;
	export let height: number;
	let numColumns = 8;
	let margin=40;

	$: squareSize = (width/numColumns) - margin;
	
	$: rows = Math.floor(height / (squareSize + margin));
	
	$: scale = scaleLinear().domain([0,width]).range([0,18]);
</script>

<style>
	div {
		
	}
</style>

<span>
	<button on:click={()=>numColumns--}>
		-
	</button>
	columns: {numColumns}
	<button on:click={()=>numColumns++}>
		+
	</button>
</span>
<label>
<input type=range min=0 max=80 bind:value={margin}> margin: {margin}
</label>

<p>
	width: {width}, squareSize: {squareSize}, rows: {rows}
</p>

<div>
	{#if width}
	<svg {height} {width} fill="none" stroke="currentColor" stroke-width="1">
		{#each {length: numColumns} as _column, i}
			<DeformingSquares {rows} {margin} {squareSize} {scale} {width} x={i*(squareSize+margin)}/>
			<DeformingSquares {rows} {margin} {squareSize} {scale} {width} x={i*(squareSize+margin)}/>
			<DeformingSquares {rows} {margin} {squareSize} {scale} {width} x={i*(squareSize+margin)}/>
		{/each}
	</svg>
	{/if}
</div>
