import React, { useEffect, useState } from 'react';

import './App.css';
import { BodyPage } from './component/BodyPage';
import { TBodyPage } from './typeComponent';
import { getBodyPageBy } from './server'
import NavBarre from './component/NavBar';
import { useMediaQuery } from 'react-responsive';
import NavBarMobile from './component/composantMobile/NavBarMobile';
import { BodyPageMobile } from './component/composantMobile/bodyPageMobile';

function App() {
  const [mainBloc, setMainBloc] = useState<TBodyPage | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)
 const isDesktopOrMobile = useMediaQuery({query: '(max-width: 400px)'})

  useEffect(() => {
    (async () => {
      setLoading(true)
      const mainBloc = await getBodyPageBy()
      setTimeout(() => {
        setMainBloc(mainBloc)
        setLoading(false)
      }, 2000)
    }) ()
  }, [])
  return (
    <div className="App"> 
        {isDesktopOrMobile ? (<div>
          <NavBarMobile/>
          <BodyPageMobile mainBloc={mainBloc!}  />
        </div>  ) : ( <div>
           <NavBarre />
           <BodyPage mainBloc={mainBloc!} />
        </div> ) }
    </div>
  );
}

export default App;
