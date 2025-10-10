import { FC, useState } from "react";
import classes from './newsletterChange.module.scss'
import { useNewsletterActions } from "../../../../entities/newsletters";
import { useAppSelector } from "../../../../app/store/store";
import { MyInput } from "../../../../shared/ui/input";
import { Lists } from "../lists/Lists";
import { MyTextarea } from "../../../../shared/ui/textarea";
import { UserCount } from "../usersCount/UserCount";
import { Action } from "../action/Action";
import { INewsletterData } from "../../../../entities/newsletters/model/types";
import { changeFormError } from "../../../../shared/lib/helpers/ChangeFormError";
import { IFormError } from "../../../../shared/model/types";

export const NewsletterDataChange: FC = () => {

    const {setName, setText, setMediaId} = useNewsletterActions()
    const {newsletterData} = useAppSelector(s => s.newsletterReducer)

    const [formError, setFormError] = useState<IFormError<INewsletterData>[]>([])
    const setErrorFieldDelete = changeFormError(formError, setFormError)

    return (
        <section className={classes.container}>
            <MyInput 
                title="Название рассылки" 
                value={newsletterData.name} 
                setValue={setName} 
                error={formError.find(error => error.field === "name")?.text}
                setError={setErrorFieldDelete('name')}
            />
            <section>
                <section className={classes.title}>Рассылка по спискам</section>
                <Lists 
                    type="lists" 
                    error={formError.find(error => error.field === "users_lists")?.text}
                    setError={setErrorFieldDelete('users_lists')}
                />            
            </section>
            <MyTextarea 
                title="Текст рассылки" 
                value={newsletterData.text}
                setValue={setText}
                error={formError.find(error => error.field === "text")?.text}
                setError={setErrorFieldDelete('text')}
            />
            <MyInput 
                title="Файл"
                value={newsletterData.media_id}
                setValue={setMediaId}
            />
            <section>
                <section className={classes.title}>Тип файла</section>
                <Lists 
                    type="fileType" 
                />            
            </section>
            <UserCount />
            <Action 
                formError={formError}
                setFormError={setFormError}
            />
        </section>
    )
}