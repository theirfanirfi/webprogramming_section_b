const LargeScreenComponent = (props) => {
    let {counterValue, name} = props
    return (
        <>
        <h1>This is LargeScreen component</h1>
        <h2>Name is: {name}</h2>
        <h1>Counter Value is: {counterValue}</h1>
        </>

    )
}

export default LargeScreenComponent;