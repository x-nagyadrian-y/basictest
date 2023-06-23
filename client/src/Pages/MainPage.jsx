import { useState, useEffect } from "react"


function MainPage(){
    const[test, setTest] = useState(null)

    const fetchTest = async() => {
        const response = await fetch("http://localhost:8080/api/test")
        const data = await response.json()
        setTest(data)
    };

    useEffect(() => {
        fetchTest();
    }, []);
    if(test !== null){
    console.log(test)
    }else{
        console.log("nem")
    }

    return (
        test === null ? (
            <div>Waiting...</div>
        ) : (
        <>
        {test.map((x) => (
            <div>{x}</div>
        ))}
        </>
        )
    )
}

export default MainPage