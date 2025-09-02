import { FC, useEffect, useState } from "react";
import classes from './userCount.module.scss'
import { useAppSelector } from "../../../../app/store/store";
import { Sign } from "../../../../shared/ui/sign";
import peopleImg from '../../../../shared/lib/assets/people.png'
import { LoaderSpinner } from "../../../../shared/ui/spinner";
import { newslettersService } from "../../../../entities/newsletters";

export const UserCount: FC = () => {

    const {newsletterData} = useAppSelector(s => s.newsletterReducer)
    const [count, setCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getData = async () => {
        try{
            setIsLoading(true)
            const countRes = await newslettersService.getRecepientsCount(newsletterData.users_lists)
            setCount(countRes)
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(newsletterData.users_lists.length > 0){
            getData()
        }
    }, [newsletterData.users_lists])

    return (
        <section className={classes.container}>
            <Sign sign="Количество пользователей">
                <section className={classes.data}>
                {
                    isLoading
                        ?
                    <section className={classes.loader}><LoaderSpinner /></section>
                        :
                    <>
                        <img src={peopleImg} />
                        {count}
                    </>
                }
                </section>
            </Sign>
        </section>
    )
}