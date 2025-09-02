import { FC, useState } from "react";
import { Sign } from "../../../../shared/ui/sign";
import deleteImg from '../../../../shared/lib/assets/delete.png'
import { Modal } from "../../../../shared/ui/modal";
import { ConfirmationAction } from "../../../../shared/ui/confirmationAction";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { newslettersService } from "../../../../entities/newsletters";
import classes from '../listActions.module.scss'
import { listService } from "../../../../entities/list";

interface IProps {
    id: number;
}

export const Delete: FC<IProps> = ({id}) => {
    
    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {setGlobalMessage} = useGlobalMessageActions()

    const onDelete = async () => {
        try{
            setIsLoading(true)
            await listService.delete(id)
            setGlobalMessage({message: 'Список рассылок успешно удален', type: 'ok'})
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при удалении списка рассылок', type: 'error'})
        }
        finally{
            setIsLoading(false)
            setOpen(false)
        }
    }

    return (
        <>
        <section className={classes.action} onClick={() => setOpen(true)}>
            <Sign sign="Удалить">
                <img src={deleteImg} />
            </Sign>
        </section>
        <Modal setOpen={setOpen} open={open}>
            <ConfirmationAction 
                onClick={onDelete}
                isLoading={isLoading}
                setOpen={setOpen}
                title="Точно хотите удалить список ?"
                type="delete"
            />
        </Modal>
        </>
    )
}