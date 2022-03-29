import React from "react"

const fun_ref = () => {
	const [counter, setCounter] = useState(1)

	const useRefDemo = useRef()
	const createRefDemo = createDemo()

	if (!useRefDemo.current) {
		useRefDemo.current = counter
	}
	if (!createRefDemo.current) {
		createRefDemo.current = counter
	}

	const handelCounter = () => {
		setCounter((counter) => counter + 1)
	}

	return (
		<div>
			counter : {counter} <br />
			useRef : {useRefDemo.current} <br />
			create ref counter : {counter} <br />
			useRef : {createRefDemo.current} <br />
		</div>
	)
}

export default fun_ref
