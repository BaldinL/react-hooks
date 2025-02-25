import { useState } from "react"

function Result() {
    function getUserData() {
        const userData = localStorage.getItem("data")
        const res = JSON.parse(userData)
        return res
    }
    const [result, setResult] = useState(getUserData)
    return (
        <div className="mt-10 justify-self-center flex flex-col items-center bg-cyan-800 rounded-2xl p-5">
            <h1 className="text-2xl">Результати введеня даних у форму</h1>
            <h1>Ім'я: {result.name}</h1>
            <h1>Прізвище: {result.surname}</h1>
            <h1>Код групи: {result.code}</h1>
            <h1>Пошта: {result.email}</h1>
        </div>
    )
}

export default Result
