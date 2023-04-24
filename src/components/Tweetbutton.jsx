import React, { useState } from 'react'

const Tweetbutton = () => {

  const [mensaje, setMensaje] = useState('')
  

  const sendMessage = () => {
    console.log(mensaje)
    let message = "Hola, vi tu página y quiero hacerte una recomendacion " + mensaje;
    let whatsappLink = "https://api.whatsapp.com/send?phone=573184255610&text=" + encodeURI(message);
    window.open(whatsappLink, "_blank");
    setMensaje('')
  }
  return (
    <div className='text-white'>
      <p>Hola. 
        <br />Bienvenid@ 
        <br />Este clon de twitter lo hice pensando en proyectos de práctica para mi <a href="https://borgesmj.github.io/" className='text-indigo-400 font-bold'>Portfolio</a>
        <br />Sientete libre de probarlo
        <br />Si tienes alguna recomendación, enviala acá abajo
        <br />
        <br />Este proyecto apenas inicia, hay muchas cosas mas que le quiero agregar.
      </p> 
      <br />
      <form className='flex flex-col'>
        <textarea 
          type="text" 
          id="nombre" 
          name="nombre" 
          cols="30" 
          rows="10" 
          value={mensaje} 
          placeholder="escribe aca tu recomendacion"
          className='text-black'
          onChange={(e)=>setMensaje(e.target.value)}
          />
        <input className='bg-green-400 px-10 py-5 rounded-lg cursor-pointer w-3/5 self-center' type="button" value="Enviar" onClick={sendMessage}/>
    </form>
    </div>
  )
}

export default Tweetbutton