<script lang="ts">
	export let rows = 4;
	export let x: number;
	export let scale: Function;	// scaling function
	export let margin: number;
	export let squareSize: number;
  export let width: number;

	let interval: NodeJS.Timer;
	let squares: Square[];
	
  type Square = {
					x1: number
					y1: number
					x2: number
					y2: number
					x3: number
					y3: number
					x4: number
					y4: number
					seeds: number[]
  }

	function init() {
		resetSeed();
		
		interval = setInterval(() => {
			x += 1;
		},20);
	};
	
	function resetSeed(){
		squares=[];
		for (let i = 0;i<rows; i++) {
			squares.push(
				{
					x1: margin,
					y1: margin*(i+1) + squareSize*i,
					x2: margin + squareSize,
					y2: margin*(i+1) + squareSize*i,
					x3: margin + squareSize,
					y3: (margin + squareSize)*(i+1),
					x4: margin,
					y4: (margin + squareSize)*(i+1),
					seeds: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
				}
			)
		};
	};
	
	$: perturb = function(seed: number) {
		return (seed - 0.5)*(scale(x)*3);
	};
	
	init();
	
	$: if (x > width) {
			clearInterval(interval);
			x = 0;
			init();
		}
</script>

<!-- TODO whats this for? -->
{#if squares.length}
	{#each squares as square}
		<path fill="none" stroke="white" stroke-width="1"
					d="M{square.x1 + x + perturb(square.seeds[0])} {square.y1 + perturb(square.seeds[1])} 
						 L{square.x2 + x + perturb(square.seeds[2])} {square.y2 + perturb(square.seeds[3])}
						 L{square.x3 + x + perturb(square.seeds[4])} {square.y3 + perturb(square.seeds[5])}
						 L{square.x4 + x + perturb(square.seeds[6])} {square.y4 + perturb(square.seeds[7])}
						 Z" />
	{/each}
{/if}
