import React, { useEffect, useState } from 'react';

import './App.css';
import { TNavbarItem } from './typeComponent/index2';
import { BodyPage } from './component/BodyPage';
import { TBodyPage } from './typeComponent';
import { getBodyPageBy } from './server'
import { getNavBarById } from './server/index2';
import NavBar1 from './component/NavBar1';

function App() {
  const [mainBloc, setMainBloc] = useState<TBodyPage | null>(null)
  const [menu, setMenu] = useState<TNavbarItem | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const mainBloc = await getBodyPageBy()
      const menu = await getNavBarById()
      setTimeout(() => {
        setMenu(menu)
        setMainBloc(mainBloc)
        setLoading(false)
      }, 2000)
    }) ()
  }, [])
  return (
    <div className="">
        <NavBar1 menu={menu!} />
        <BodyPage mainBloc={mainBloc!} />
        
        
    </div>
  );
}

export default App;
