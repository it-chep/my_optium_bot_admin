import { FC } from "react";
import classes from './features.module.scss'
import { IPost, postService, usePostActions } from "../../../../entities/post";
import { DeleteAction } from "../../../../features/deleteAction";
import { EditAction } from "../../../../features/editAction";
import { POST_THEME_UPDATE_ROUTE } from "../../../../app/router/routes";

interface IProps {
    post: IPost;
    posts: IPost[];
    setPosts: (post: IPost[]) => void;
}

export const Features: FC<IProps> = ({posts, setPosts, post}) => {

    const {setPost} = usePostActions()

    const onDelete = async () => {
        await postService.delete(post.id)
        const targetInd = posts.findIndex(p => p.id === post.id)
        if(targetInd >= 0){
            const target: IPost[] = JSON.parse(JSON.stringify(posts))
            target.splice(targetInd, 1)
            setPosts(target)
        }
        await new Promise(resolve => setTimeout(resolve, 4000))
    }

    const onEdit = () => {
        setPost(post)
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