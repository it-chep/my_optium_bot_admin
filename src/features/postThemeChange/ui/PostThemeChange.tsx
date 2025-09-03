import { FC } from "react";
import { MyInput } from "../../../shared/ui/input";
import { MyButton } from "../../../shared/ui/button";
import classes from './postThemeChange.module.scss'
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { useAppSelector } from "../../../app/store/store";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useNavigate } from "react-router-dom";
import { POSTS_THEMES_ROUTE } from "../../../app/router/routes";
import { postService, usePostActions } from "../../../entities/post";
import { MyCheckbox } from "../../../shared/ui/myCheckbox";

interface IProps {
    isCreate: boolean;
}

export const PostThemeChange: FC<IProps> = ({isCreate}) => {

    const {setGlobalMessage} = useGlobalMessageActions()

    const {setIsLoading} = useGlobalLoadingActions()

    const router = useNavigate()

    const {post} = useAppSelector(s => s.postReducer)
    const {setName, setIsRequired} = usePostActions()

    const onSend = async () => {
        try{
            setIsLoading(true)
            if(isCreate){
                await postService.create(post)
            }
            else{
                await postService.update(post)
            }
            router(POSTS_THEMES_ROUTE.path)
        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: `Ошибка при ${isCreate? 'создании' : 'изменении'} темы поста`, type: 'error'})
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section className={classes.container}>
            <MyInput
                title="Название темы"
                value={post.name}
                setValue={setName}
            />
            <section className={classes.required}>
                <section className={classes.subtitle}>Обязательная тема</section>
                <MyCheckbox
                    checked={post.is_theme_required}
                    onSelected={setIsRequired}
                />
            </section>
            <section className={classes.button}>
                <MyButton onClick={onSend}>
                    {isCreate ? 'Создать' : 'Обновить'}
                </MyButton>
            </section>   
        </section>
    )
}