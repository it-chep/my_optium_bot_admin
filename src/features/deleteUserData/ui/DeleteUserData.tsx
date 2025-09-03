import { FC, useState } from "react";
import classes from './deleteUserData.module.scss'
import { Modal } from "../../../shared/ui/modal";
import { ConfirmationAction } from "../../../shared/ui/confirmationAction";
import { userService } from "../../../entities/user";
import { useGlobalMessageActions } from "../../../entities/globalMessage";

interface IProps {
    userId: number;
    targetId: number;
    type: 'list' | 'post'
}

export const DeleteUserData: FC<IProps> = ({userId, targetId, type}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {setGlobalMessage} = useGlobalMessageActions()

    const onDelete = async () => {
        try{
            setIsLoading(true)
            if(type === 'list'){
                await userService.deleteUserList(userId, targetId)
            }
            else{
                await userService.deleteUserPost(userId, targetId)
            }
            setGlobalMessage({message: type === 'list' ? 'Список у пользователя успешно удален' : 'Пост у пользователя успешно удален', type: 'ok'})
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: `Ошибка при удалении ${type === 'list' ? 'списка' : 'поста'} у пользователя`, type: 'error'})
        }
        finally{
            setIsLoading(false)
            setOpen(false)
        }
    }


    return (
        <>
            <svg className={classes.delete} onClick={() => setOpen(true)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 7L7 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 25L7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Modal setOpen={setOpen} open={open}>
                <ConfirmationAction 
                    onClick={onDelete}
                    setOpen={setOpen} 
                    title={type === 'list' ? "Точно хотите удалить пользователя из списка ?" : "Точно хотите удалить пост информации ?"}
                    type='delete'
                    isLoading={isLoading}
                />
            </Modal>
        </>
    )
}