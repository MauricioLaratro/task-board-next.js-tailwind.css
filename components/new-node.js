import React, { useEffect } from 'react';

export default function NewNode() {
  useEffect(() => {
    const newNode = document.createElement('div');
    newNode.id = 'new-DOM-node';
    document.getElementById('__next').appendChild(newNode);

    // Limpia el nodo cuando el componente se desmonte.
    return () => {
        document.getElementById('__next').removeChild(newNode);
    };
  }, []);

  return null; // Este componente no renderiza nada en el DOM.
}