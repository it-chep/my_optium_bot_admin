import { ComponentProps, FC, PropsWithChildren, useRef, useState } from "react";
import classes from './myInput.module.scss'

// feature - max-width: 16px

interface IProps {
    value: string;
    setValue: (value: string) => void;
    
    required?: boolean;
    isLoading?: string;
    error?: string;
    setError?: (err: string) => void;
}

export const MyInput: FC<IProps & ComponentProps<"input"> & PropsWithChildren> = (
    {value, setValue, error, setError = () => {}, children, ...props}
) => {

    const [currentError, setCurrentError] = useState<string>('')

    const containerRef = useRef<HTMLDivElement>(null)

    const onChangeCurrent = (value: string) => {
        setValue(value)
        setCurrentError('')
        setError('')
    }

    const onFocus = () => {
        if(containerRef.current){
            containerRef.current.classList.add(classes.focus)
        }
    }

    const onBlur = () => {
        if(containerRef.current){
            containerRef.current.classList.remove(classes.focus)
        }
    }

    return (
        <section className={classes.wrapper}>
            <section 
                ref={containerRef} 
                className={classes.container + (Boolean(children) ? ` ${classes.feature}` : '')}
            >
                <input 
                    value={value} 
                    onChange={e => onChangeCurrent(e.target.value)} 
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...props} 
                />
                <section className={classes.feature}>
                    {children}
                </section>
            </section>
            {(error || currentError) && <span>{error || currentError}</span> }
        </section>
    )
}