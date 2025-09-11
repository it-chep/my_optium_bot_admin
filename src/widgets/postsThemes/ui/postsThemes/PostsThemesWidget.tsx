import { FC, useEffect, useState } from "react";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import classes from './postsThemesWidget.module.scss'
import { MyButton } from "../../../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { POST_THEME_CREATE_ROUTE } from "../../../../app/router/routes";
import { IPost, PostItem, postService, usePostActions } from "../../../../entities/post";
import { Features } from "../features/Features";
import { AuthError } from "../../../../shared/lib/helpers/AuthError";
import { useMyActions } from "../../../../entities/my";


export const PostsThemesWidget: FC = () => {

    const router = useNavigate()

    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {setInitialState} = usePostActions()
    const {setGlobalMessage} = useGlobalMessageActions()
    const {setIsAuth} = useMyActions()

    const getData = async () => {
        try{
            setIsLoading(true)
            const listsRes = await postService.getAll()
            setPosts(listsRes)
        }
        catch(e){ 
            console.log(e)
            if(e instanceof AuthError){
                setIsAuth(false)
                setGlobalMessage({message: e.message, type: 'error'})
            }
            else{
                setGlobalMessage({message: 'Ошибка при получении списка тем постов', type: 'error'})
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

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <ul className={classes.post}>
                    <li className={classes.create}>
                        <section className={classes.button}>
                            <MyButton onClick={() => router(POST_THEME_CREATE_ROUTE.path)}>Создать тему поста</MyButton>
                        </section>
                    </li>
                    {posts.map(post => 
                        <PostItem key={post.id} postItem={post}>
                            <Features 
                                posts={posts}
                                setPosts={setPosts}
                                post={post} 
                            />
                        </PostItem>
                    )}
                </ul>
            }
        </section>
    )
}