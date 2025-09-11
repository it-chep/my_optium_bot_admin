import { FC } from "react";
import { CardBadge, IUserData } from "../../../../entities/user";
import { DeleteUserData } from "../../../../features/deleteUserData";


interface IProps {
    user: IUserData;
}

export const Lists: FC<IProps> = ({user}) => {


    return (
        <>
        {    
            user.lists.map(list => 
                <CardBadge key={list.id} name={list.name}>
                    {/* <DeleteUserData type="list" userId={user.user.id} targetId={list.id} /> */}
                </CardBadge>
            )
        } 
        </>
    )
}