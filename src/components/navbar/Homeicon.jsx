import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Homeicon = () => {

    const list = [
      {icono: <FaHome/>, nombre: "Inicio"},
      {icono: <FaSearch/>, nombre: "Explorar"},
      {icono: <FaBell/>, nombre: "Notificaciones"},
      {icono: <FaEnvelope/>, nombre: "Mensajes"},
    ];

    return (
        <div className='flex flex-row content-end xl:flex-col'>
            {list.map((item, index) => (
                <div key={index} className="text-2xl text-white mb-10">
                    <a href="#" className='hover:bg-slate-50 hover:text-black rounded-2xl flex flex-row xl:px-5 xl:items-center'>
                        {item.icono}
                        <h3 className='hidden xl:inline xl:px-3'>{item.nombre}</h3>
                    </a>
                </div>
            ))}
         </div>
    );
};

export default Homeicon;
