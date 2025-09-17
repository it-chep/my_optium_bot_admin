import { FC, PropsWithChildren } from "react";
import classes from './informationPostItem.module.scss'
import { Sign } from "../../../../shared/ui/sign";
import { IInformationPost } from "../../model/types";
import requiredImg from '../../../../shared/lib/assets/required_theme.png'


interface IProps{
    infPostItem: IInformationPost;
}

export const InformationPostItem: FC<IProps & PropsWithChildren> = ({infPostItem, children}) => {


    return (
        <li className={classes.item}>
            <section className={classes.data}>
                <section className={classes.sign}>
                    <Sign sign="Название поста">
                        {infPostItem.name}
                    </Sign>
                </section>
                <section className={classes.sign}>
                    <Sign sign="Тема поста">
                        {infPostItem.theme_name}
                    </Sign>
                </section>
                {
                    infPostItem.is_theme_required
                        &&
                    <section className={classes.sign}>
                        <Sign sign="Признак обязательной темы">
                            <img style={{width: '20px', height: '20px'}} src={requiredImg} />
                        </Sign>
                    </section>
                }
                <section className={classes.sign}>
                    <Sign sign="Порядковый номер в теме">
                        {infPostItem.order}
                    </Sign>
                </section>
            </section>
            <section className={classes.features}>
                {children}
            </section>
        </li>
    )
}