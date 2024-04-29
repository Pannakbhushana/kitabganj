import React, { createContext, useState } from 'react';

export const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const [renderState, setRenderState] = useState(false);

const forceRender =()=>{
    setRenderState(!renderState)
}

  return (
    <RenderContext.Provider value={{ forceRender, renderState }}>
      {children}
    </RenderContext.Provider>
  );
};

