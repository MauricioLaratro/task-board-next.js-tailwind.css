import Image from 'next/image.js';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './modal.js';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <Image src="/edit.svg" width={20} height={20} alt="Boton para editar titulo"/>
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.getElementById('new-DOM-node')
      )}
    </>
  );
}