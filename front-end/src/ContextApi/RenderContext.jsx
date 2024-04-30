import React, { createContext, useState } from 'react';

export const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const [renderState, setRenderState] = useState(false);
  const [isLoading, setIsLoading]=useState(false)

const forceRender =()=>{
    setRenderState(!renderState)
}

const showLoading=()=>{
  setIsLoading(true);
}

const hideLoading=()=>{
  setIsLoading(false);
}

  return (
    <RenderContext.Provider value={{ forceRender, renderState,showLoading,hideLoading, isLoading }}>
      {children}
    </RenderContext.Provider>
  );
};

