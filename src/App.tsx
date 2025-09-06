import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './app/store/store';
import { LoaderSpinner } from './shared/ui/spinner';
import { useEffect, useState } from 'react';
import { myService, useMyActions } from './entities/my';
import { LOGIN_ROUTE } from './app/router/routes';
import { GlobalMessage } from './entities/globalMessage';
import { GlobalLoading } from './entities/globalLoading';

function App() {

  const {setIsAuth} = useMyActions()
  const {my} = useAppSelector(s => s.myReducer)
  const [isLoading, setIsLoading] = useState<boolean>(!my.isAuth)
  const router = useNavigate()
  const {globalMessage} = useAppSelector(s => s.globalMessageReducer)
  const {isLoading: globalIsLoading} = useAppSelector(s => s.globalLoadingReducer)
  
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [pathname])

  const auth = async () => {
    try{
      setIsLoading(true)
      // await userService.check()
      // setIsAuth(true)
      router(LOGIN_ROUTE.path)  // это в блок catch
    } 
    catch(e){

      console.log(e)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if(!my.isAuth){
      auth()
    }
  }, [])
  
  useEffect(() => {
    if(!my.isAuth){
      router(LOGIN_ROUTE.path)
    }
  }, [my.isAuth])

  return (
    <section className="main">
      {
        isLoading
          ?
        <section className={"loader_main"}><LoaderSpinner /></section>
          :
        <>
          <Outlet />
          { globalMessage.message && <GlobalMessage /> }
          { globalIsLoading && <GlobalLoading /> }
          <footer>

          </footer>
        </>
      }
    </section>
  );
}

export default App;
