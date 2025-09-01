import { FC, useEffect, useState } from "react";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import classes from './newslettersWidget.module.scss'
import { LoaderSpinner } from "../../../shared/ui/spinner";
import { INewsletter, NewsletterItem, newslettersService } from "../../../entities/newsletters";
import { NewsletterActions } from "../../../features/newsletterActions";
import { MyButton } from "../../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { NEWSLETTER_CREATE_ROUTE } from "../../../app/router/routes";



export const NewslettersWidget: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setGlobalMessage} = useGlobalMessageActions()

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
            setGlobalMessage({message: 'Ошибка при получении списка рассылок', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
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
                                />
                            }
                        </NewsletterItem>
                    )}
                </ul>
            }
        </section>
    )
}