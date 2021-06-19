import React from 'react'
import { useCounter } from '../contexts/CounterContext'
import ComponentB from '../components/ComponentB'

function ComponentA() {
	const { count } = useCounter()

	return (
		<div>
			<p style={{ backgroundColor: 'wheat' }}>Count: {count}</p>
			<ComponentB />
		</div>
	)
}

export default ComponentA
