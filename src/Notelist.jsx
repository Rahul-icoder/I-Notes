import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import "./notelist.css"

 const Notelist = (props) => {

    const {fun,deleteId} = props;
    return (
        <Card className="card">
            <CardContent>
            <Typography className="font_change"   color="textSecondary">
            {props.text}
            <DeleteIcon className="Delete_Style" onClick={() => fun(deleteId)}/>
            </Typography>
            </CardContent>
        </Card>
    )
}

export default Notelist;
