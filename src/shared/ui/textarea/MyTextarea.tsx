import { FC } from "react";
import classes from './myTextarea.module.scss'


interface IProps {
    title: string;
    value: string;
    setValue: (value: string) => void;
    isLoading?: boolean;
}

export const MyTextarea: FC<IProps> = ({value, setValue, isLoading, title}) => {


    return (
        <section className={classes.container}>
            <section className={classes.title}>{title}</section>
            <textarea 
                className={classes.textarea} 
                value={value} 
                onChange={e => setValue(e.target.value)} 
            />  
            
        </section>      
    )
}