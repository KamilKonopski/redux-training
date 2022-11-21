import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

function Counter() {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const toggle = useSelector((state) => state.counter.showCounter);

	function incrementHandler() {
		dispatch(counterActions.increment());
	};

	function increaseHandler() {
		dispatch(counterActions.increase(5));
	};

	function decrementHandler() {
		dispatch(counterActions.decrement());
	};

	function toggleCounterHandler() {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{toggle && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Incerement</button>
				<button onClick={increaseHandler}>Incerement by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
