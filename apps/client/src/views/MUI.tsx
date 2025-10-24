import BoilerButton from '#components/BoilerButton.tsx'

function MUIView() {
  return (
    <>
      <BoilerButton onClick={ () => alert('Clicked!') }>Boiler button</BoilerButton>
    </>
  )
}

export default MUIView
