import { useState } from "react"

export default function Form() {
  const [lover, setLover] = useState('')
  const [loving, setLoving] = useState('')
  const [data, setData] = useState<{ lover: string, loving: string }>({ lover: '', loving: '' })

  // const pushData = () => {
  //   setData({lover, loving})
  // }

  return (
    <>
      <p>Quem está registrando:</p>
      <form>
        <input type="radio" id="danilo" value="Danilo" name="lover" onChange={(e) => setLover(e.target.value)} />
        <label htmlFor="danilo">Danilo</label>
        <input type="radio" id="guilherme" value="Guilherme" name="lover" onChange={(e) => setLover(e.target.value)} />
        <label htmlFor="guilherme">Guilherme</label>
      </form>
      <label htmlFor="loving">Por quem se apaixonou?</label>
      <input type="text" id="loving" name='loving' required onChange={(e) => setLoving(e.target.value)} />
      <input type="submit" value='Registrar' onClick={() => setData({ lover, loving })} />
      <div>
        {JSON.stringify(data)}
      </div>
    </>
  )
}