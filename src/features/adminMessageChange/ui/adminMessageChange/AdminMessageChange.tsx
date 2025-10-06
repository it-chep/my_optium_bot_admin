import { FC, useState } from "react";
import classes from './adminMessageChange.module.scss'
import { MyTextarea } from "../../../../shared/ui/textarea";
import { Action } from "../action/Action";
import { Lists } from "../lists/Lists";
import { IAdminMessageData } from "../../../../entities/adminMessage/model/types";
import { StepNumber } from "../stepNumber/StepNumber";
import { IFormError } from "../../../../shared/model/types";
import { changeFormError } from "../../../../shared/lib/helpers/ChangeFormError";

export const AdminMessageChange: FC = () => {

    const [adminMessages, setAdminMessage] = useState<IAdminMessageData>({
        scenario_id: -1,
        step_order: -1,
        message: '',
        type: -1
    })

    const [formError, setFormError] = useState<IFormError<IAdminMessageData>[]>([])
    const setErrorFieldDelete = changeFormError(formError, setFormError)

    return (
        <section className={classes.container}>
            <section>
                <section className={classes.title}>Сценарий</section>
                <Lists 
                    adminMessage={adminMessages}
                    setAdminMessage={setAdminMessage}
                    type="scenarios" 
                    error={formError.find(error => error.field === 'scenario_id')?.text}
                    setError={setErrorFieldDelete('scenario_id')}
                />            
            </section>
            <section>
                <section className={classes.title}>Порядковый номер шага</section>
                <StepNumber 
                    adminMessages={adminMessages}
                    setAdminMessage={setAdminMessage}
                    error={formError.find(error => error.field === 'step_order')?.text}
                    setError={setErrorFieldDelete('step_order')}
                />     
            </section>
            <section>
                <section className={classes.title}>Тип сообщения (доктору/админу)</section>
                <Lists 
                    adminMessage={adminMessages}
                    setAdminMessage={setAdminMessage}
                    type='typeMessage' 
                    error={formError.find(error => error.field === 'type')?.text}
                    setError={setErrorFieldDelete('type')}
                />            
            </section>
            <MyTextarea
                title="Текст сообщения"
                value={adminMessages.message}
                setValue={(val: string) => setAdminMessage({...adminMessages, message: val})}
                error={formError.find(error => error.field === 'type')?.text}
                setError={setErrorFieldDelete('type')}
            />
            <Action 
                formError={formError}
                setFormError={setFormError}
                adminMessage={adminMessages} 
            />
        </section>
    )
}