import { FC, useState } from "react";
import { IUserData, ScenarioItem } from "../../../../entities/user";
import classes from './scenarios.module.scss'
import { EditAction } from "../../../../features/editAction";
import { Modal } from "../../../../shared/ui/modal";
import { UpdateUserScenarioDatetime } from "../../../../features/updateUserScenarioDatetime";

interface IProps {
    user: IUserData;
    setUser: (user: IUserData) => void;
}

export const Scenarios: FC<IProps> = ({user, setUser}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [currentScenarioId, setCurrentScenarioId] = useState<number>(0)

    const setDatetime = (val: string) => {
        const target: IUserData = JSON.parse(JSON.stringify(user))
        const targetInd = target.scenarios.findIndex(s => s.id === currentScenarioId)
        if(targetInd >= 0){
            target.scenarios[targetInd].scheduled_time = val;
        }
        setUser({...target})
    }

    return (
        <>
            <ul className={classes.list}>
                {user.scenarios.map(scenario => 
                    <ScenarioItem scenario={scenario}>
                        <EditAction 
                            toPath=""
                            onEdit={() => {setOpen(true); setCurrentScenarioId(scenario.id)}}
                        />
                    </ScenarioItem>
                )}
            </ul>
            <Modal
                open={open}
                setOpen={setOpen}
            >   
                <UpdateUserScenarioDatetime 
                    user={user}
                    setOpen={setOpen}
                    setDatetime={setDatetime}
                />
            </Modal>
        </>
    )
}