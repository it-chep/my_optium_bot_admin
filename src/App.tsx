import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './app/store/store';
import { LoaderSpinner } from './shared/ui/spinner';
import { useEffect, useState } from 'react';
import { userService, useUserActions } from './entities/user';
import { LOGIN_ROUTE } from './app/router/routes';

function App() {

  const {setIsAuth} = useUserActions()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useNavigate()

  const auth = async () => {
    try{
      setIsLoading(true)
      // await userService.check()
      // setIsAuth(true)
      router(LOGIN_ROUTE.path, {replace: true})
    } 
    catch(e){

      console.log(e)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    auth()
  }, [])

  return (
    <section className="main">
      {
        isLoading
          ?
        <section className={"loader_main"}><LoaderSpinner /></section>
          :
        <>
          <header className="App-header">
          
          </header>
          <Outlet />
          <footer>

          </footer>
        </>
      }
    </section>
  );
}

export default App;
