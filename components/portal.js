// import Image from 'next/image.js';
import { useState, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './modal.js';

export default function PortalExample({ onTitleEdit, title, addComment, comments, icon }) {
  const [showModal, setShowModal] = useState(false);
  let IconComponent = null
  if (icon) {
      if (isValidElement(icon)) {
          IconComponent = icon
      }
  }
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        {/* <Image src="/edit.svg" width={20} height={20} alt="Boton para editar titulo"/> */}
        {IconComponent}
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} onTitleEdit={onTitleEdit} title={title} addComment={addComment} comments={comments}/>,
        document.getElementById('new-DOM-node')
      )}
    </>
  );
}