<script>
  import { LayerCake, Svg, Html } from 'layercake';

  import Line from '../dashboard/_charts/Line.svelte';
  import Area from '../dashboard/_charts/Area.svelte';
  import AxisX from '../dashboard/_charts/AxisX.svelte';
  import AxisY from '../dashboard/_charts/AxisY.svelte';
  import Labels from '../dashboard/_charts/GroupLabels.html.svelte';
  import SharedTooltip from '../dashboard/_charts/SharedTooltip.svelte';

    // Define some data
    export var data = [
      {x: 0, y: 24},
      {x: 5, y: 7},
      {x: 10, y: 14},
      {x: 15, y: 35},
      {x: 20, y: 13},
      {x: 25, y: 19},
      {x: 30, y: 27},
      {x: 35, y: 11},
      {x: 40, y: 9},
      {x: 45, y: 28},
      {x: 50, y: 33},
      {x: 55, y: 20},
      {x: 60, y: 8}
    ];
     export var color = '#4fbadb';
     export var strokeWidth = '4.5';
</script>

<div class="chart-container">
    <LayerCake
      data={ data }
      x='x'
      y='y'
    >
    <Svg>
        <Line stroke='{color}' strokeWidth='{strokeWidth}'/>
        <Area fill='{color}'/>
        <SharedTooltip />
    </Svg>
      <Html>
        <SharedTooltip
        dataset={data}
        offset={-10}
        formatTitle={()=>Math.random()}
        />
      </Html>
    </LayerCake>
  </div>

<style>
.chart-container {
    width: 100%;
    height: 100%;
  }
</style>