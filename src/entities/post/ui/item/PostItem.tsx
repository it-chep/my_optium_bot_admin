import { FC, PropsWithChildren } from "react";
import classes from './postItem.module.scss'
import { Sign } from "../../../../shared/ui/sign";
import { IPost } from "../../model/types";
import requiredImg from '../../../../shared/lib/assets/required_theme.png'

interface IProps{
    postItem: IPost;
}

export const PostItem: FC<IProps & PropsWithChildren> = ({postItem, children}) => {


    return (
        <li className={classes.item}>
            <section className={classes.data}>
                <section className={classes.sign}>
                   <span className={classes.name}>{postItem.name}</span>
                </section>
                {
                    postItem.is_theme_required
                        &&
                    <section className={classes.sign}>
                        <Sign sign="Признак обязательной темы">
                            <img style={{width: '20px', height: '20px'}} src={requiredImg} />
                        </Sign>
                    </section>
                }
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}