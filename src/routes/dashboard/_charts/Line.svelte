<!--
  @component
  Generates an SVG line shape.
 -->
<script>
// @ts-nocheck

  import { getContext } from 'svelte';

  const { data, xGet, yGet } = getContext('LayerCake');

  /** @type {String} [stroke='#ab00d6'] - The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
  export let stroke = '#ab00d6';
  export let strokeWidth = '2';

  $: path = 'M' + $data
    .map(d => {
      return $xGet(d) + ',' + $yGet(d);
    })
    .join('L');
</script>

<path style="--lineStrokeWidth: {strokeWidth};" class='path-line' d='{path}' {stroke}></path>

<style>
  .path-line {
    fill: none;
    stroke-linejoin: bevel;
    stroke-linecap: round;
    stroke-width: var(--lineStrokeWidth);
  }
</style>