import * as d3 from "d3";
import { toolTipOn, toolTipUpdate } from './tooltips';

export function postProcess({near_earth_objects}, date) {
  let asteroids = near_earth_objects[date];
  return asteroids.map(({
    id,
    name, 
    is_potentially_hazardous_asteroid,
    estimated_diameter: { kilometers: { estimated_diameter_max: diameter } },
    close_approach_data
  }) => ({
    id,
    name,
    hazardous: is_potentially_hazardous_asteroid,
    diameter: +diameter,
    velocity:  +close_approach_data[0].relative_velocity.kilometers_per_hour, 
    distance: +close_approach_data[0].miss_distance.kilometers
  }));
}

export function plotAsteroids(asteroids) {

  const padding = 120;
  const svg = d3.select('svg');
  const tooltip = d3.select('.astro-tooltip');
  const width = svg.attr('width');
  const height = svg.attr('height');

  //generate scales
  const xScale = d3.scaleLinear()
		   .range([ padding, width - padding ]);
  const yScale = d3.scaleLinear()
		   .range([ height - padding, padding ]);

  const rScale = d3.scaleLinear()
		   .range([10, width * 0.05]);

  //generate Axis labels
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);
  
  xScale.domain(d3.extent(asteroids, d => d.distance));
  yScale.domain(d3.extent(asteroids, d => d.velocity));
  rScale.domain(d3.extent(asteroids, d => d.diameter));

  const graph = svg.selectAll('circle')
		  .data(asteroids, d => d.id)
  graph.enter()
    .append('circle')
      .attr('r', d => rScale(d.diameter))
      .attr('cx', d => xScale(d.distance))
      .attr('cy', d => yScale(d.velocity))
      .style('fill', d => d.hazardous ? '#FF4136': '#AAAAAA')
      .style('opacity', 0.8)
      .on('mouseover', toolTipOn)
      .on('mousemove', toolTipUpdate)
      .on('mouseout', () => {
	tooltip.style('opacity', 0);
      })

  graph.exit()
    .transition(3)
    .attr('r', 0)
    .remove();

  svg.append('g')
    .classed('xAxis', true)
    .attr('transform', `translate(0, ${height - padding + 10})`)

  svg.append('g')
    .classed('yAxis', true)
    .attr('transform', `translate(${padding - 10}, 0)`)

  d3.select('.xAxis')
    .call(xAxis)

  d3.select('.yAxis')
    .call(yAxis)

  svg.append('text')
    .classed('title', true)
    .attr('x', `${width/2}`)
    .attr('y', `${padding/2}`)
    .attr('text-anchor','middle')
    
  svg.append("text")             
     .classed('xLabel', true)
     .attr("transform", `translate(${width/2}, ${height})`)
     .attr('dy', '-2em')
     .style("text-anchor", "middle")

  d3.select('.xLabel')
    .text("Distance from earth (km)");

  svg.append("text")
     .classed('yLabel', true)
     .attr("transform", "rotate(-90)")
     .attr("x", 0 - (height / 2))
     .attr("dy", "3em")
     .style("text-anchor", "middle");

  d3.select('.yLabel')
    .text("Velocity (km/h)");  

  d3.select('.title')
    .text('Asteroids velocity / distance from earth')
};


