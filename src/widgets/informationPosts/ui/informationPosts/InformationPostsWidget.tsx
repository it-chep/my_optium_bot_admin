import { FC, useEffect, useState } from "react";
import { useGlobalMessageActions } from "../../../../entities/globalMessage";
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import classes from './informationPostsWidget.module.scss'
import { MyButton } from "../../../../shared/ui/button";
import { useNavigate } from "react-router-dom";
import { INFORMATION_POST_CREATE_ROUTE } from "../../../../app/router/routes";
import { IInformationPost, InformationPostItem, informationPostService, useInformationPostActions } from "../../../../entities/informationPost";
import { Features } from "../features/Features";



export const InformationPostsWidget: FC = () => {

    const router = useNavigate()

    const [infPosts, setInfPosts] = useState<IInformationPost[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const {setGlobalMessage} = useGlobalMessageActions()

    const {setInitialState} = useInformationPostActions()

    const onDelete = async (id: number) => {
        await informationPostService.delete(id)
    }

    const getData = async () => {
        try{
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1000))
            const postsRes = await informationPostService.getAll()
            setInfPosts(postsRes)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при получении списка информационных постов', type: 'error'})
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
                            <MyButton onClick={() => router(INFORMATION_POST_CREATE_ROUTE.path)}>Создать пост</MyButton>
                        </section>
                    </li>
                    {infPosts.map(infPost => 
                        <InformationPostItem 
                            key={infPost.id}
                            infPostItem={infPost}
                        >
                            <Features infPost={infPost} />
                        </InformationPostItem>
                    )}
                </ul>
            }
        </section>
    )
}