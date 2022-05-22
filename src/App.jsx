
import Back from "./Components/Back";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front";

function App() {

    return (
        <BrowserRouter>
        <Routes>
        <Route index element={<Front show="all"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="documentary" element={<Front show="documentary"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="family" element={<Front show="family"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="animation" element={<Front show="animation"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="drama" element={<Front show="drama"/>} />
        <Route path="horror" element={<Front show="horror"/>} />
        <Route path="admin" element={<Back/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;