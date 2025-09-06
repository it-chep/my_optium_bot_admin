import { FC, useEffect, useState } from "react";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import classes from './newslettersWidget.module.scss'
import { LoaderSpinner } from "../../../shared/ui/spinner";
import { INewsletter, NewsletterItem, newslettersService, useNewsletterActions } from "../../../entities/newsletters";
import { NewsletterActions } from "../../../features/newsletterActions";
import { MyButton } from "../../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { NEWSLETTER_CREATE_ROUTE } from "../../../app/router/routes";
import { DeleteAction } from "../../../features/deleteAction";
import { AuthError } from "../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../entities/my";



export const NewslettersWidget: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setInitialState} = useNewsletterActions()
    const {setIsAuth} = useMyActions()
    
    const [newsletters, setNewsletters] = useState<INewsletter[]>([])

    const router = useNavigate()

    const getData = async () => {
        try{
            setIsLoading(true)
            const newslettersRes = await newslettersService.getAll()
            setNewsletters(newslettersRes)
        }
        catch(e){
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при получении списка рассылок', type: 'error'})
            }
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
        setInitialState()
    }, [])


    const onChangeStatusId = (id: number) => {
        return () => {
            const targetId = newsletters.findIndex(newsletter => newsletter.id === id)
            if(targetId >= 0){
                const target = [...newsletters];
                target[targetId].status_id++;
                target[targetId].status_name = 'Отправляется'
                setNewsletters(target)
            }
        }
    }

    const onDelete = async (id: number) => {
        await newslettersService.delete(id)
    }

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <ul className={classes.list}>
                    <li className={classes.create}>
                        <section className={classes.button}>
                            <MyButton onClick={() => router(NEWSLETTER_CREATE_ROUTE.path)}>Создать рассылку</MyButton>
                        </section>
                    </li>
                    {newsletters.map(newsletter => 
                        <NewsletterItem  
                            key={newsletter.id}
                            name={newsletter.name}
                            statusId={newsletter.status_id}
                            statusName={newsletter.status_name}
                            userCount={newsletter.users_count}
                        >
                            { 
                                newsletter.status_id === 1 
                                    && 
                                <NewsletterActions 
                                    newsletter={newsletter} 
                                    onChangeStatusId={onChangeStatusId(newsletter.id)}
                                >
                                    <DeleteAction 
                                        successText="Рассылка успешно удалена"
                                        errorText="Ошибка при удалении рассылки"
                                        questionText="Точно хотите удалить рассылку ?"
                                        onDelete={() => onDelete(newsletter.id)}
                                    />
                                </NewsletterActions>
                            }
                        </NewsletterItem>
                    )}
                </ul>
            }
        </section>
    )
}