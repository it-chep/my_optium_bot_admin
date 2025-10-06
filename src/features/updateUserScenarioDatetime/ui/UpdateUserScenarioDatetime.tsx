import { FC, useState } from "react";
import classes from './updateUserScenarioDatetime.module.scss'
import { MyInput } from "../../../shared/ui/input";
import { MyButton } from "../../../shared/ui/button";
import { useGlobalLoadingActions } from "../../../entities/globalLoading";
import { useGlobalMessageActions } from "../../../entities/globalMessage";
import { IUserData, userService } from "../../../entities/user";

interface IProps {
    user: IUserData;
    setDatetime: (val: string) => void;
    setOpen: (open: boolean) => void;
}

export const UpdateUserScenarioDatetime: FC<IProps> = ({user, setDatetime, setOpen}) => {

    const [value, setValue] = useState<string>('')

    const {setIsLoading} = useGlobalLoadingActions()
    const {setGlobalMessage} = useGlobalMessageActions()

    const [error, setError] = useState<string>('')
    
    const check = () => {
        if(value === ''){
            setError('Обязательное поле')
            return false
        }
        return true
    }

    const onSend = async () => {
        if(!check()){
            return
        }
        try{
            setIsLoading(true)
            await userService.setScenarioDatetime(user.user.id, value)
            setDatetime(value)
            setGlobalMessage({message: 'Следующий запуск сценария сохранен', type: 'ok'})

        }
        catch(e){
            console.log(e)
            setGlobalMessage({message: 'Ошибка при сохранении данных', type: 'error'})
        }
        finally{
            setIsLoading(false)
            setOpen(false)
        }
    }

    return (
        <section className={classes.container}>
            <MyInput    
                title="Следующий запуск сценария в формате YYYY-MM-DD HH:MM:SS (2006-01-02 15:04:05)"
                value={value}
                setValue={setValue}
                error={error}
                setError={setError}
            />
            <section className={classes.button}>
                <MyButton 
                    onClick={onSend}
                    error={error.length > 0 ? "Заполните обязательные поля" : ''}    
                >
                    Сохрнаить
                </MyButton>
            </section>
        </section>
    )
}