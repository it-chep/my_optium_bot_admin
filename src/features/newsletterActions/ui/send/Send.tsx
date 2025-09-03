import { FC, useState } from "react";
import { Sign } from "../../../../shared/ui/sign";
import { Modal } from "../../../../shared/ui/modal";
import { ConfirmationAction } from "../../../../shared/ui/confirmationAction";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { INewsletter, newslettersService } from "../../../../entities/newsletters";
import sendImg from '../../../../shared/lib/assets/send.png'
import classes from '../newsletterActions.module.scss'
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";

interface IProps {
    id: number;
    onChangeStatusId: () => void;
}


export const Send: FC<IProps> = ({id, onChangeStatusId}) => {
    
    const [open, setOpen] = useState<boolean>(false)
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsLoading} = useGlobalLoadingActions()

    const onSend = async () => {
        try{
            setIsLoading(true)
            setOpen(false)
            await newslettersService.send(id)
            onChangeStatusId()
            setGlobalMessage({message: 'Рассылка успешно отправлена. Обновите страницу через какое-то время для получения актуальных данных', type: 'ok'})
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при отправлении рассылки', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <>
        <section className={classes.action} onClick={() => setOpen(true)}>
            <Sign sign="Отправить">
                <img src={sendImg} />
            </Sign>
        </section>
        <Modal setOpen={setOpen} open={open}>
            <ConfirmationAction 
                onClick={onSend}
                setOpen={setOpen}
                title="Точно хотите отправить рассылку ?"
                type="send"
            />
        </Modal>
        </>
    )
}