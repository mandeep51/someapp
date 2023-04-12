import React, { useState } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');
function React_Modal() {
const [modalIsOpen,setOpen]=useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(true)}>open the modal</button>
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={()=>setOpen(false)}
    style={{
        content:{color:'red'}
    }}
    >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptatem quia molestiae! Quidem ipsam, reprehenderit asperiores voluptatibus tenetur dolores in delectus consequuntur rem reiciendis omnis modi expedita deserunt molestias dolorem impedit itaque explicabo doloremque qui accusantium magni commodi nam. Accusantium quae praesentium laboriosam commodi esse, doloremque tempora eos quidem eius numquam qui consequuntur unde mollitia sapiente amet quis, eaque rem! Placeat, ea aliquid dolores explicabo totam saepe quia voluptatum quo dignissimos reiciendis ad cupiditate blanditiis quam, incidunt laboriosam pariatur nobis velit deserunt, exercitationem vero quod? Animi laudantium consequuntur distinctio veritatis dolor facilis, fugit accusamus at. Delectus atque ipsam dolor. Repudiandae.</p>
    </Modal>
    </div>
  )
}

export default React_Modal
