export function BgforCirle(){
  return (
    <>
      <div className="absolute z-0" style={
        { 
          width: '100vw', 
          height:'100vh', 
          flex:'flex', 
          justifyContent:'center',
          alignItems:"center"
        }}>
           <div className="bg-absolute bg-justify-center">
              <div className="bg-shape1 bg-teal bg-opacity-50 bg-blur"></div>
              <div className="bg-shape2 bg-primary bg-opacity-50 bg-blur"></div>
              <div className="bg-shape1 bg-purple bg-opacity-50 bg-blur"></div>
           </div> 
      </div>
    </>
  )
} 