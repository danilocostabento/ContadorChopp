import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Form from "../views/Form";

export default function Content () {
  return(
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Form />} />
        <Route path="" />
      </Routes>
    </main>
  )
}