import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './app/store/store';
import { LoaderSpinner } from './shared/ui/spinner';
import { useEffect } from 'react';
import { useUserActions } from './entities/user';
import { LOGIN_ROUTE } from './app/router/routes';

function App() {

  const {isLoading, user} = useAppSelector(s => s.userReducer)
  const {setIsLoading} = useUserActions()
  const router = useNavigate()

  const auth = async () => {
    try{

      router(LOGIN_ROUTE.path, {replace: true})
    } 
    catch(e){
      
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
