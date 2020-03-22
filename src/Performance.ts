import {Velocity} from "@/types"

////////////////////////////////////////////////////////////////////////////////
// TYPE
////////////////////////////////////////////////////////////////////////////////

export class Performance {
	velocities: Array<Velocity>
	
	constructor(velocities: Array<Velocity>) {
		this.velocities = velocities
	}
	
	// GETTERS
	
	get randomVelocity() { // get a random velocity
		let velocities = [...this.velocities]
		if (velocities.length < Performance.defaultProbabilities.length) { // if there are too few historical velocities to pull from
			return velocities.concat(Performance.defaultProbabilities.slice(0, Performance.defaultProbabilities.length - velocities.length))
		}
		return velocities[Math.floor(Math.random() * velocities.length)]
	}
	
	// STATIC
	
	static defaultProbabilities = [1.0, 1.1, 0.9, 1.0, 1.2, 0.8, 1.0, 1.1, 0.9, 1.0] // the default probabilities to fill when there isn't enough historical data (its length is also the amount that determines how much that is)
}