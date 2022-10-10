import { useEffect, useState } from "react";

export const Timer = ({ task }) => {
	const initialTimer = 60 * Number(task.time);
	const defaultBreak = 60 * 5;
	const [breakOn, setBreakOn] = useState(false);
	const [timerOn, setTimerOn] = useState(false);
	const [value, setValue] = useState(initialTimer);
	const [progress, setProgress] = useState(100);

	const resetTimer = () => {
		setTimerOn(false);
		if(breakOn) {
			setValue(defaultBreak);
		}else {
			setValue(initialTimer);
		}
	};

	const toggleTimer =() => setTimerOn(timerOn ? false : true)

	const startBreak = () => {
		setTimerOn(false)
		setBreakOn(true)
		setValue(defaultBreak);
	};

	const stratWork = ()=>{
		setBreakOn(false)
		setTimerOn(true)
		setValue(initialTimer);
	}

	useEffect(() => {
		if (timerOn) {
			if (value >0) {
				const intervalId = setInterval(() => {
					setValue((initialTimer) => initialTimer - 1);
				}, 1000);
				document.title = getTime(value);
				return () => clearInterval(intervalId);
			}
		}
	}, [timerOn, value]);

	const getTime = (time) => {
		let min = Math.floor(time / 60);
		let sec = time % 60;
		return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
	};
	
	useEffect(()=>{
		setProgress(()=>value/(initialTimer/100))
		if(breakOn){
			setProgress(()=>value/(defaultBreak/100))
		}
	},[value]) // eslint-disable-line react-hooks/exhaustive-deps
	
	return (
		<>
			<div className="container">
				<div className="outer-div" style={{background:`conic-gradient(#1DB954 ${progress}%, #cff4db 1%)`}}>
					<div className="inner-div">
						<div className="inner-content">
							<p className="pomodor-time bold">{getTime(value)}</p>
							<p className="pomodor-default bold center">
								{breakOn ? "Break" : "Focus"}
							</p>
						</div>
					</div>
				</div>

				<div className="pomodor-controls">
					<span
						className="material-icons-outlined md-30 task-control-btn"
						onClick={resetTimer}
					>
						replay
					</span>
					<span
						className="material-icons-outlined md-30 task-control-btn"
						onClick={toggleTimer}
					>
						{timerOn ? "pause_circle" : "play_circle"}
					</span>
					<span
						className="material-icons-outlined md-30 task-control-btn"
						onClick={breakOn ? stratWork : startBreak}
					>
						skip_next
					</span>
				</div>
			</div>
		</>
	);
};
