import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const toggle = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const increaseHandler = () => {
		dispatch({ type: "increase", value: 5 });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
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
