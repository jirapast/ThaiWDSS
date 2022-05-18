import * as React from 'react';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function LogIn() {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); alert(open) };
    const handleClose = () => { setOpen(false); };

    return (
        <React.Fragment>
            <ListItemButton><ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText primary="Dashboard" /></ListItemButton>
            <ListItemButton><ListItemIcon></ListItemIcon><ListItemText primary="Log In" onClick={handleClickOpen} /></ListItemButton>
            <Divider sx={{ my: 1 }} />

            {/* <Dialog open={open} onClose={handleClose}> */}
            {/* <DialogContent> */}
            {/* <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}> */}
            {/* <Typography component="h1" variant="h5"> ข้อมูลสภาพอากาศ </Typography> */}
            {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
            {/* <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField margin="normal" fullWidth id="input_1" label="ความเร็วลม (องศา ตามเข็มนาฬิกาจากทิศเหนือ)" name="wind_speed" />
                            <TextField margin="normal" fullWidth id="input_2" label="ทิศทางลม (กิโลเมตรต่อชั่วโมง)" name="wind_direction" />
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >ตกลง</Button>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >นำเข้าข้อมูลสภาพอากาศ</Button>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions> */}
            {/* <Button onClick={this.handleClose}>Cancel</Button> */}
            {/* </DialogActions>
            </Dialog> */}
        </React.Fragment >
    )
}