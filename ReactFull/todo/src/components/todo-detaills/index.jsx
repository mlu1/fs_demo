import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetails({openDialog,todoDetails,setOpenDialog}){
    return(
        <Fragment>
            <Dialog open ={openDialog}>
                    <DialogTitle>{todoDetails?.todo}</DialogTitle>
                        <DialogActions>
                            <Button onClick ={()=>setOpenDialog()}>Close</Button>
                        </DialogActions>
            </Dialog>
        </Fragment>
    )
}