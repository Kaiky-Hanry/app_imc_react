import { useState } from 'react'

const Form = (props) => {
  const [mass, setMass] = useState('');
  const [height, setHeight] = useState('');
  const handleSubmit = e => {
    e.preventDefault()
    const imc = mass / height ** 2;
    props.handleResult(imc)
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Massa: </label>
        <input type="number" required value={mass} onChange={e => {
          setMass(e.target.value)
        }} />
        <label>Altura: </label>
        <input type="number" required value={height} onChange={e => {
          setHeight(e.target.value);
        }} />
        <button>Calcular</button>
      </form>
    </div>
  );
}

export default Form;
