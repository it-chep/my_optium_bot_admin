import { ChangeEvent, FC } from "react";
import classes from './myTextarea.module.scss'


interface IProps {
    title: string;
    value: string;
    setValue: (value: string) => void;
    isLoading?: boolean;
    error?: string;
    setError?: (err: string) => void; 
}

export const MyTextarea: FC<IProps> = ({value, setValue, isLoading, title, error, setError}) => {

    const onChange = (e: ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement;
        setValue(target.value)
        setError && setError('')
    }

    return (
        <section className={classes.container}>
            <section className={classes.title}>{title}</section>
            <textarea 
                disabled={isLoading}
                className={classes.textarea} 
                value={value} 
                onChange={onChange} 
            />  
            <section className={classes.errorText}>
                {error}
            </section>
        </section>      
    )
}