import { FC } from "react";
import classes from './features.module.scss'
import { IPost, postService, usePostActions } from "../../../../entities/post";
import { DeleteAction } from "../../../../features/deleteAction";
import { EditAction } from "../../../../features/editAction";
import { POST_THEME_UPDATE_ROUTE } from "../../../../app/router/routes";

interface IProps {
    post: IPost;
}

export const Features: FC<IProps> = ({post}) => {

    const {setPost} = usePostActions()

    const onDelete = async () => {
        await postService.delete(post.id)
    }

    const onEdit = () => {
        setPost(post)
    }

    return (
        <section className={classes.container}>
            <DeleteAction 
                questionText="Точно хотите удалить тему ?"
                errorText="Произошла ошибка при удалении темы"
                successText="Тема успешна удалена"
                onDelete={() => onDelete()} 
            />
            <EditAction 
                onEdit={onEdit}     
                toPath={POST_THEME_UPDATE_ROUTE.path}
            />
        </section>
    )
}