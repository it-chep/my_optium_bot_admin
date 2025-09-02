import { FC, useEffect, useState } from "react";
import classes from './adminMessagesWidget.module.scss'
import { useNavigate } from "react-router-dom";
import { DeleteAction } from "../../../features/deleteAction";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { AdminMessageItem, adminMessageService, IAdminMessage } from "../../../entities/adminMessage";
import { LoaderSpinner } from "../../../shared/ui/spinner";
import { MyButton } from "../../../shared/ui/button";
import { ADMIN_MESSAGE_CREATE_ROUTE } from "../../../app/router/routes";



export const AdminMessagesWidget: FC = () => {

    const router = useNavigate()

    const [messages, setMessages] = useState<IAdminMessage[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setGlobalMessage} = useGlobalMessageActions()

    const onDelete = async (id: number) => {
        await adminMessageService.delete(id)
    }

    const getData = async () => {
        try{
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1000))
            const listsRes = await adminMessageService.getAll()
            setMessages(listsRes)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении списка текстов админских сообщений', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <ul className={classes.message}>
                    <li className={classes.create}>
                        <section className={classes.button}>
                            <MyButton onClick={() => router(ADMIN_MESSAGE_CREATE_ROUTE.path)}>Создать сообщение</MyButton>
                        </section>
                    </li>
                    {messages.map(message => 
                        <AdminMessageItem key={message.id} adminMessage={message}>
                            <DeleteAction
                                questionText="Точно хотите удалить сообщение ?"
                                errorText="Ошибка при удалении сообщения"
                                successText="Сообщение успешно удалено"
                                onDelete={() => onDelete(message.id)}
                            />
                        </AdminMessageItem>
                    )}
                </ul>
            }
        </section>
    )
}