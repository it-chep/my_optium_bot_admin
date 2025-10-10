import { FC, useState } from "react";
import classes from './informationPostChange.module.scss'
import { useAppSelector } from "../../../../app/store/store";
import { MyInput } from "../../../../shared/ui/input";
import { MyTextarea } from "../../../../shared/ui/textarea";
import { Action } from "../action/Action";
import { useInformationPostActions } from "../../../../entities/informationPost";
import { Lists } from "../lists/Lists";
import { IInformationPostData } from "../../../../entities/informationPost/model/types";
import { IFormError } from "../../../../shared/model/types";
import { changeFormError } from "../../../../shared/lib/helpers/ChangeFormError";

interface IProps {
    isCreate: boolean;
    error?: string;
    setError?: (err: string) => void; 
}

export const InformationPostChange: FC<IProps> = ({isCreate, error, setError}) => {

    const {informationPost} = useAppSelector(s => s.informationPostReducer)
    const {setName, setMediaId, setOrder, setMessage} = useInformationPostActions()

    const [formError, setFormError] = useState<IFormError<IInformationPostData>[]>([])
    const setErrorFieldDelete = changeFormError(formError, setFormError)

    return (
        <section className={classes.container}>
            <MyInput 
                title="Название поста (в основном для отображения в админке)" 
                value={informationPost.post_name} 
                setValue={setName} 
                error={formError.find(error => error.field === 'post_name')?.text}
                setError={setErrorFieldDelete('post_name')}
            />
            <section>
                <section className={classes.title}>Тема поста</section>
                <Lists 
                    type="posts" 
                    error={formError.find(error => error.field === 'theme_id')?.text}
                    setError={setErrorFieldDelete('theme_id')}
                />            
            </section>
            <MyInput 
                title="Порядковый номер в теме (> 0)"
                value={String(informationPost.order)}
                setValue={(val: string) => setOrder(+val)}
                type="number"
                error={formError.find(error => error.field === 'order')?.text}
                setError={setErrorFieldDelete('order')}
            />
            <MyInput 
                title="ID файла из телеграм"
                value={informationPost.media_id}
                setValue={setMediaId}
                error={formError.find(error => error.field === 'media_id')?.text}
                setError={setErrorFieldDelete('media_id')}
            />
            <section>
                <section className={classes.title}>Тип медиа файла</section>
                <Lists 
                    type="fileType" 
                />            
            </section>
            <MyTextarea
                title="Текст поста"
                value={informationPost.message}
                setValue={setMessage}
                error={formError.find(error => error.field === 'message')?.text}
                setError={setErrorFieldDelete('message')}
            />
            <Action 
                isCreate={isCreate} 
                formError={formError}
                setFormError={setFormError}
            />
        </section>
    )
}