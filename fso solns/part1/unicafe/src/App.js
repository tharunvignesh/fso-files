import React, { useState } from 'react'

const Button = (props) => {
	return <button onClick={props.value}>{props.text}</button>
}

const Statistic = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
	return (
		<table>
			<tbody>
				<Statistic text='good' value={props.good} />
				<Statistic text='neutral' value={props.neutral} />
				<Statistic text='bad' value={props.bad} />
				<Statistic text='all' value={props.all} />
				<Statistic text='average' value={props.averageScore} />
				<Statistic text='positive' value={props.positive + ' %'} />
			</tbody>
		</table>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const all = good + bad + neutral
	const averageScore = (good - bad) / all
	const positive = (good / all) * 100

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button text='Good' value={() => setGood((prevState) => prevState + 1)} />
			<Button
				text='Neutral'
				value={() => setNeutral((prevState) => prevState + 1)}
			/>
			<Button text='Bad' value={() => setBad((prevState) => prevState + 1)} />
			<h1>Statistics</h1>
			{all === 0 ? (
				<p>No Feedback given</p>
			) : (
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					all={all}
					positive={positive}
					averageScore={averageScore}
				/>
			)}
		</div>
	)
}

export default App
