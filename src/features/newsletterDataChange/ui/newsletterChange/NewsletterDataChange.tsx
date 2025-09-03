import { FC } from "react";
import classes from './newsletterChange.module.scss'
import { useNewsletterActions } from "../../../../entities/newsletters";
import { useAppSelector } from "../../../../app/store/store";
import { MyInput } from "../../../../shared/ui/input";
import { Lists } from "../lists/Lists";
import { MyTextarea } from "../../../../shared/ui/textarea";
import { UserCount } from "../usersCount/UserCount";
import { Action } from "../action/Action";


export const NewsletterDataChange: FC = () => {

    const {setName, setText, setСontentTypeId, setMediaId} = useNewsletterActions()
    const {newsletterData} = useAppSelector(s => s.newsletterReducer)

    return (
        <section className={classes.container}>
            <MyInput 
                title="Название рассылки" 
                value={newsletterData.name} 
                setValue={setName} 
            />
            <section>
                <section className={classes.title}>Рассылка по спискам</section>
                <Lists type="lists" />            
            </section>
            <MyTextarea 
                title="Текст рассылки" 
                value={newsletterData.text}
                setValue={setText}
            />
            <MyInput 
                title="Файл"
                value={newsletterData.media_id}
                setValue={setMediaId}
            />

            <section>
                <section className={classes.title}>Тип файла</section>
                <Lists type="fileType" />            
            </section>

            <UserCount />

            <Action />
        </section>
    )
}