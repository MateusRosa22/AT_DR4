import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UsuarioContextoProps {
  usuario: string;
  setUsuario: React.Dispatch<React.SetStateAction<string>>;
}

interface UsuarioProvedorProps {
  children: ReactNode;
}

const UsuarioContexto = createContext<UsuarioContextoProps | undefined>(undefined);

export const UsuarioProvedor: React.FC<UsuarioProvedorProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<string>('');

  return (
    <UsuarioContexto.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContexto.Provider>
  );
};

export const useUsuario = (): UsuarioContextoProps => {
  const context = useContext(UsuarioContexto);
  if (context === undefined) {
    throw new Error('useUsuario deve utilizando dentro de UsuarioProvedor');
  }
  return context;
};
