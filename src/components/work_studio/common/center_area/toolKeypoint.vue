<script>
import { fabric } from 'fabric';

export default {
  name: 'keyPoint',

  makeCircle(left, top, line1, line2, line3, line4) {
    let c = new fabric.Circle({
      tool: 'keypoint',
      left: left,
      top: top,
      strokeWidth: 2,
      radius: 4,
      fill: '#fff',
      stroke: '#666',
      originX: 'center',
      originY: 'center',
    });
    c.hasControls = c.hasBorders = false;
    c.line1 = line1;
    c.line2 = line2;
    c.line3 = line3;
    c.line4 = line4;
    return c;
  },
  makeLine(coords) {
    return new fabric.Line(coords, {
      tool: 'keypoint',
      fill: 'red',
      stroke: 'red',
      strokeWidth: 2,
      selectable: false,
      evented: false,
    });
  },
};
</script>
