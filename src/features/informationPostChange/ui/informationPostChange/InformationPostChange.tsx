import { FC } from "react";
import classes from './informationPostChange.module.scss'
import { useAppSelector } from "../../../../app/store/store";
import { MyInput } from "../../../../shared/ui/input";
import { MyTextarea } from "../../../../shared/ui/textarea";
import { Action } from "../action/Action";
import { useInformationPostActions } from "../../../../entities/informationPost";
import { Lists } from "../lists/Lists";

interface IProps {
    isCreate: boolean;
}

export const InformationPostChange: FC<IProps> = ({isCreate}) => {

    const {informationPost} = useAppSelector(s => s.informationPostReducer)
    const {setName, setMediaId, setOrder, setMessage} = useInformationPostActions()

    const checkOrder = (val: string) => {
        if(+val >= 1){
            setOrder(+val)
        }
    }

    return (
        <section className={classes.container}>
            <MyInput 
                title="Название поста (в основном для отображения в админке)" 
                value={informationPost.post_name} 
                setValue={setName} 
            />
            <section>
                <section className={classes.title}>Тема поста</section>
                <Lists type="posts" />            
            </section>
            <MyInput 
                title="Порядковый номер в теме (> 0)"
                value={String(informationPost.order)}
                setValue={(val: string) => setOrder(+val)}
                type="number"
            />
            <MyInput 
                title="ID файла из телеграм"
                value={informationPost.media_id}
                setValue={setMediaId}
            />
            <section>
                <section className={classes.title}>Тип медиа файла</section>
                <Lists type="fileType" />            
            </section>
            <MyTextarea
                title="Текст поста"
                value={informationPost.message}
                setValue={setMessage}
            />

            <Action isCreate={isCreate} />
        </section>
    )
}