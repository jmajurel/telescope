import * as d3 from "d3";

export function toolTipOn(d) {
  d3.select('.astro-tooltip')
    .style('opacity', 1)
    .html(`
	<p>
	  <strong>Name: </strong>
	  ${d.name}
	</p>
	<p>
	  <strong>Hazardous: </strong>
	  ${d.hazardous ? 'Yes' : 'No'}
	</p>
	<p>
	  <strong>Diameter: </strong>
	  ${d.diameter.toLocaleString()} km
	</p>
	<p>
	  <strong>Velocity: </strong>
	  ${d.velocity.toLocaleString()} km/h
	</p>
	<p>
	  <strong>Distance from Earth: </strong>
	  ${d.distance.toLocaleString()} km
	</p>
    `);
};

export function toolTipUpdate() {

  const toolTip = d3.select('.astro-tooltip');
  toolTip
    .style('top', d3.event.pageY + (toolTip.node().offsetHeight/4)   + 'px')
    .style('left', d3.event.pageX - (toolTip.node().offsetWidth/2) + 'px')
};


export function tooltipOff() {
          
  d3.select(d3.event.target)
    .transition()
      .delay(100)
    .style('fill', 'grey');

  d3.select('.astro-tooltip')
    .style('opacity', 0)
    .html('');
};

