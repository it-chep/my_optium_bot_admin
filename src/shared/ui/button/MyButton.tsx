import { FC, PropsWithChildren } from "react";
import classes from './myButton.module.scss'

interface IProps {
    onClick?: () => void;
    isLoading?: boolean;
    error?: string;
}

export const MyButton: FC<IProps & PropsWithChildren> = ({isLoading, error, onClick, children}) => {


    return (
        <section className={classes.wrapper}>
            <button 
                disabled={isLoading || Boolean(error)}
                onClick={onClick} 
                className={classes.button}
            >
                {children}
            </button>
            { error && <section className={classes.error}>*{error}</section> }
        </section>
    )
}