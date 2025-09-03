import { FC, useEffect } from "react";
import classes from './dropDownList.module.scss'
import { LoaderSpinner } from "../../spinner";
import { List } from "../list/List";
import { IItem } from "../../../model/types";

interface IProps {
    items: IItem[];
    selectedIdItems: number[];
    onSelected: (item: IItem) => (selected: boolean) => void
    getList: () => void;
    isLoading: boolean;
}

export const DropDownList: FC<IProps> = ({selectedIdItems, items, isLoading, getList, onSelected}) => {

    useEffect(() => {
        getList()
    }, [])

    return (
        <section className={classes.container}>
          
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                <section className={classes.list}>
                    <List
                        onSelected={onSelected}
                        items={items} 
                        selectedIdItems={selectedIdItems} 
                    />
                </section>
            }
        </section>
    )
}