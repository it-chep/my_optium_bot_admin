import { FC } from "react";
import classes from './features.module.scss'
import { DeleteAction } from "../../../../features/deleteAction";
import { EditAction } from "../../../../features/editAction";
import { INFORMATION_POST_UPDATE_ROUTE, POST_THEME_UPDATE_ROUTE } from "../../../../app/router/routes";
import { IInformationPost, informationPostService, useInformationPostActions } from "../../../../entities/informationPost";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { useGlobalLoadingActions } from "../../../../entities/globalLoading";
import { useNavigate } from "react-router-dom";

interface IProps {
    infPost: IInformationPost;
}

export const Features: FC<IProps> = ({infPost}) => {
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsLoading} = useGlobalLoadingActions()
    const router = useNavigate()
    const {setInformationPostData} = useInformationPostActions()

    const onDelete = async () => {
        await informationPostService.delete(infPost.id)
    }

    const onEdit = async () => {
        try{
            setIsLoading(true)
            const infPostRes = await informationPostService.get(infPost.id)
            setInformationPostData(infPostRes)
            router(INFORMATION_POST_UPDATE_ROUTE.path)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении данных информационного поста', type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <EditAction 
                onEdit={onEdit}     
                toPath={POST_THEME_UPDATE_ROUTE.path}
            />
            <DeleteAction 
                questionText="Точно хотите удалить тему ?"
                errorText="Произошла ошибка при удалении темы"
                successText="Тема успешна удалена"
                onDelete={() => onDelete()} 
            />
        </section>
    )
}