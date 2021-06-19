import React from 'react'
import { useCounter } from '../contexts/CounterContext'

function ComponentB() {
	const { increaseCount } = useCounter()

	return (
		<div>
			<div style={{ backgroundColor: 'red' }}>
				<button onClick={increaseCount}>Increase Count</button>
			</div>
		</div>
	)
}

export default ComponentB
