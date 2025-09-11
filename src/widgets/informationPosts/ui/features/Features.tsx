import { FC } from "react";
import classes from './features.module.scss'
import { DeleteAction } from "../../../../features/deleteAction";
import { EditAction } from "../../../../features/editAction";
import { INFORMATION_POST_UPDATE_ROUTE, POST_THEME_UPDATE_ROUTE } from "../../../../app/router/routes";
import { IInformationPost, informationPostService, useInformationPostActions } from "../../../../entities/informationPost";

interface IProps {
    infPost: IInformationPost;
    posts: IInformationPost[];
    setPosts: (posts: IInformationPost[]) => void;
}

export const Features: FC<IProps> = ({posts, setPosts, infPost}) => {
    const {setInformationPostData} = useInformationPostActions()

    const onDelete = async () => {
        await informationPostService.delete(infPost.id)
        const targetInd = posts.findIndex(p => p.id === infPost.id)
        if(targetInd >= 0){
            const target: IInformationPost[] = JSON.parse(JSON.stringify(posts))
            target.splice(targetInd, 1)
            setPosts(target)
        }
    }

    const onEdit = async () => {
        const infPostRes = await informationPostService.get(infPost.id)
        setInformationPostData(infPostRes)
    }

    return (
        <section className={classes.container}>
            <EditAction 
                onEditAsync={onEdit}     
                toPath={INFORMATION_POST_UPDATE_ROUTE.path}
                errorText="Ошибка при получении данных информационного поста"
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