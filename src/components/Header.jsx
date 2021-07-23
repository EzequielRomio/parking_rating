const Header = ({height}) => {
  return (
    <header className={'d-flex-align-center d-flex-justify-center'} style={{height: `${height === 'small' ? '180px' : '480px'}`}}>
      <span style={{marginRight: '20px', position: 'relative'}}>
        PARKinG 
        <div style={{position: 'absolute', fontSize: '18px', top: '-10px', right: '65px'}}>&#128081;</div> 
      </span>
      <span style={{marginLeft: '20px', position: 'relative'}}>
        RATinG 
        <div style={{position: 'absolute', fontSize: '18px', top: '-12px', right: '65px'}}>&#11088;</div>
      </span>
    </header>
  )
}

export default Header