<!--
  @component
  Generates an SVG area shape.
 -->
<script>
// @ts-nocheck

  import { getContext } from 'svelte';

  const { data, xGet, yGet, xScale, yScale, extents } = getContext('LayerCake');

  /**  @type {String} [fill='#ab00d610'] The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
  export let fill = '#ab00d6';

  $: path = 'M' + $data
    .map(d => {
      return $xGet(d) + ',' + $yGet(d);
    })
    .join('L');

  /**  @type {String} **/
  let area;

  $: {
    const yRange = $yScale.range();
    area = path + (
      'L' + $xScale($extents.x ? $extents.x[1] : 0) + ',' + yRange[0] +
      'L' + $xScale($extents.x ? $extents.x[0] : 0) + ',' + yRange[0] +
      'Z'
    );
  }
</script>

<svg>
  <defs>
    <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="{fill}" stop-opacity="0.8" />
      <stop offset="70%" stop-color="{fill}" stop-opacity="0.5" />
      <stop offset="100%" stop-color="{fill}" stop-opacity="0.06" />
    </linearGradient>
  </defs>
  <style>
    #rect1 {
      fill: url(#Gradient1);
    }
    .stop1 {
      stop-color: red;
    }
    .stop2 {
      stop-color: black;
      stop-opacity: 0;
    }
    .stop3 {
      stop-color: blue;
    }
  </style>

  <path class='path-area' d='{area}' fill="url(#Gradient)"></path>
</svg>