import { FC, useState } from "react";
import classes from './addUserData.module.scss'
import { MyCheckbox } from "../../../../shared/ui/myCheckbox";
import { List } from "../list/List";
import { MyButton } from "../../../../shared/ui/button";
import { DropDownList } from "../dropDownList/DropDownList";
import { IItem } from "../../model/types";

interface IProps {
    userItems: IItem[];
    type: 'posts' | 'lists';
    setLists: (item: IItem, selected: boolean) => void;
    userId: number;
}

export const AddUserData: FC<IProps> = ({userItems, type, setLists, userId}) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className={classes.wrapper}>
            <section className={classes.button}>   
                <MyButton onClick={() => setOpen(!open)}>{open ? '-' : '+'}</MyButton>
            </section>
            {
                open && <DropDownList userId={userId} setLists={setLists} type={type} userItems={userItems} />
            }
        </section>
    )
}