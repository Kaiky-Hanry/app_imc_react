const Display = props => {
  const imc = parseFloat(props.imc);
  let displayOut = '';
  let imcClass = '';

  if (imc !== 0) {
    displayOut = `Valor do IMC é ${imc.toFixed(2)}`
    if (imc < 18.5) {
      imcClass = 'Abaixo do peso'
    } else {
      if (imc < 25) {
        imcClass = 'Peso normal'
      } else {
        if (imc < 30) {
          imcClass = 'Sobrepeso'
        } else {
          imcClass = 'Obesidade'
        }
      }
    }
  }
  return (
    <>
      {imc !== 0 && (
        <div className="Display">
          <h2>{imcClass}</h2>
          <p>{displayOut}</p>
        </div>
      )}
    </>
  )
}

export default Display;