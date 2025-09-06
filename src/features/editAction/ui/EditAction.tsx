import { FC } from "react";
import classes from './editAction.module.scss'
import editImg from '../../../shared/lib/assets/edit.png'
import { useNavigate } from "react-router-dom";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { Sign } from "../../../shared/ui/sign";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";

interface IProps {
    toPath: string;
    onEdit?: () => void;
    onEditAsync?: () => Promise<void>
    errorText?: string;
}

export const EditAction: FC<IProps> = ({toPath, onEditAsync, onEdit, errorText=""}) => {
    
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsLoading} = useGlobalLoadingActions()
    const router = useNavigate()
    const {setIsAuth} = useMyActions()

    const onEditAsyncWrap = async () => {
        if(onEditAsync){
            try{
                setIsLoading(true)
                await onEditAsync()
                router(toPath)
            }
            catch(e){
                console.log(e)
                if(e instanceof AuthError){
                    setIsAuth(false)
                    setGlobalMessage({message: e.message, type: 'error'})
                }
                else{
                    setGlobalMessage({message: errorText, type: 'error'})
                }
            }
            finally{
                setIsLoading(false)
            }
        }
    }

    const onEditWrap = () => {
        if(onEdit){
            onEdit()
            router(toPath)    
        }
    }

    const choice = () => {
        if(onEdit){
            onEditWrap()
        }
        if(onEditAsync){
            onEditAsyncWrap()
        }
    }

    return (
        <section onClick={choice} className={classes.action}>
            <Sign sign="Редкатировать">
                <img src={editImg} />
            </Sign>
        </section>
    )
}