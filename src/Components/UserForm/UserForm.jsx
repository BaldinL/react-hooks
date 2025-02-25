import { useState } from "react"

function UserForm() {
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        code: "",
        email: ""
    })
    function changeHandler(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    function submitHandler() {
        localStorage.setItem("data", JSON.stringify(userData))
    }
    return (
        <>
            <form
                onSubmit={submitHandler}
                className="min-w-100 mt-7 p-5 bg-cyan-600 rounded-2xl justify-self-center flex justify-evenly flex-col min-h-100"
            >
                <h1 className="self-center text-3xl">Форма</h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Ім'я: "
                    required
                    className="w-100% p-3 outline-none bg-cyan-800 rounded-2xl focus:bg-cyan-500 focus:ring-3 transition duration-300"
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="surname"
                    required
                    placeholder="Прізвище: "
                    className="w-100% p-3 outline-none bg-cyan-800 rounded-2xl focus:bg-cyan-500 focus:ring-3 transition duration-300"
                    onChange={changeHandler}
                />
                <input
                    type="number"
                    name="code"
                    placeholder="Код групи: "
                    required
                    className="w-100% p-3 outline-none bg-cyan-800 rounded-2xl focus:bg-cyan-500 focus:ring-3 transition duration-300 no-spinner   [&::-webkit-inner-spin-button]:appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none  "
                    onChange={changeHandler}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Електрона пошта: "
                    required
                    className="w-100% p-3 outline-none bg-cyan-800 rounded-2xl focus:bg-cyan-500 focus:ring-3 transition duration-300"
                    onChange={changeHandler}
                />
                <button
                    type="submit"
                    className="bg-cyan-800 rounded-2xl self-center p-3 cursor-pointer active:bg-cyan-500 active:ring-3 transition duration-300 active:transition-none hover:ring-2"
                >
                    Надіслати
                </button>
            </form>
        </>
    )
}

export default UserForm
