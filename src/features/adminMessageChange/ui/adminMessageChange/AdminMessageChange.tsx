import { FC, useState } from "react";
import classes from './adminMessageChange.module.scss'
import { MyInput } from "../../../../shared/ui/input";
import { MyTextarea } from "../../../../shared/ui/textarea";
import { Action } from "../action/Action";
import { Lists } from "../lists/Lists";
import { IAdminMessageData } from "../../../../entities/adminMessage/model/types";

export const AdminMessageChange: FC = () => {

    const [adminMessages, setAdminMessage] = useState<IAdminMessageData>({
        scenario_id: -1,
        step_order: '1',
        message: '',
        type: -1
    })

    return (
        <section className={classes.container}>
            <section>
                <section className={classes.title}>Сценарий</section>
                <Lists 
                    adminMessage={adminMessages}
                    setAdminMessage={setAdminMessage}
                    type="scenarios" 
                />            
            </section>
           
            <MyInput 
                title="Номер шага (integer > 0)"
                value={String(adminMessages.step_order)}
                setValue={(val: string) => setAdminMessage({...adminMessages, step_order: val})}
                type="number"
            />
           
            <section>
                <section className={classes.title}>Тип сообщения (доктору/админу)</section>
                <Lists 
                    adminMessage={adminMessages}
                    setAdminMessage={setAdminMessage}
                    type='typeMessage' 
                />            
            </section>
            <MyTextarea
                title="Текст сообщения"
                value={adminMessages.message}
                setValue={(val: string) => setAdminMessage({...adminMessages, message: val})}
            />

            <Action adminMessage={adminMessages} />
        </section>
    )
}