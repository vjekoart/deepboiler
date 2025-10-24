import BoilerButton from '#components/BoilerButton.tsx'

function AnotherPageView() {
  return (
    <>
      <BoilerButton onClick={ () => alert('Clicked!') }>Boiler button</BoilerButton>
    </>
  )
}

export default AnotherPageView
