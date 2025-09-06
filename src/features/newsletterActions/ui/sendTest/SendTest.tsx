import { FC, useState } from "react";
import { Sign } from "../../../../shared/ui/sign";
import { Modal } from "../../../../shared/ui/modal";
import { ConfirmationAction } from "../../../../shared/ui/confirmationAction";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { newslettersService } from "../../../../entities/newsletters";
import testImg from '../../../../shared/lib/assets/test.png'
import classes from '../newsletterActions.module.scss'
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";

interface IProps {
    id: number;
}

export const SendTest: FC<IProps> = ({id}) => {
    
    const [open, setOpen] = useState<boolean>(false)
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsLoading} = useGlobalLoadingActions()
    const {setIsAuth} = useMyActions()

    const onSend = async () => {
        try{
            setIsLoading(true)
            setOpen(false)
            await newslettersService.sendTest(id)
            setGlobalMessage({message: 'Рассылка успешно отправлена на тест', type: 'ok'})
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при отправлении рассылки на тест', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <>
        <section className={classes.action} onClick={() => setOpen(true)}>
            <Sign sign="Протестировать">
                <img src={testImg} />
            </Sign>
        </section>
        <Modal setOpen={setOpen} open={open}>
            <ConfirmationAction 
                onClick={onSend}
                setOpen={setOpen}
                title="Точно хотите отправить рассылку на тест ?"
                type="send"
            />
        </Modal>
        </>
    )
}