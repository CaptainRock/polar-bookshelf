import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {MUITagListItem} from "./MUITagListItem";
import {TagDescriptor} from "polar-shared/src/tags/TagDescriptors";
import {NodeID} from "../folder_sidebar/FolderSidebarStore";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);
//
// export default function CheckboxList() {
//     const classes = useStyles();
//     const [checked, setChecked] = React.useState([0]);
//
//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];
//
//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }
//
//         setChecked(newChecked);
//     };
//
//     return (
//         <List className={classes.root}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;
//
//                 return (
//                 );
//             })}
//         </List>

interface IProps {
    readonly tags: ReadonlyArray<TagDescriptor>;
    readonly selected: ReadonlyArray<string>;
    readonly toggleSelected: (nodes: ReadonlyArray<NodeID>) => void;
}

export const MUITagList = (props: IProps) => {

    const {selected} = props;

    return (
        <>
            {props.tags.map(tag => <MUITagListItem key={tag.id}
                                                   selected={selected.includes(tag.id)}
                                                   toggleSelected={props.toggleSelected}
                                                   nodeId={tag.id}
                                                   label={tag.label}
                                                   info={tag.count}/>)}
        </>
    );
}
