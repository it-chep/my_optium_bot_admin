import { FC } from "react";
import { CardBadge, IUserData } from "../../../../entities/user";
import { DeleteUserData } from "../../../../features/deleteUserData";


interface IProps {
    user: IUserData;
}

export const Posts: FC<IProps> = ({user}) => {


    return (
        <>
        {    
            user.posts.map(post => 
                <CardBadge is_required_theme={post.is_required_theme} key={post.id} name={post.name}>
                    <DeleteUserData type="post" userId={user.user.id} targetId={post.id} />
                </CardBadge>
            )
        } 
        </>
    )
}