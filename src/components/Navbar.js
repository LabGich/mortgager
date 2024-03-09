import  AppBar  from "@mui/material/AppBar";
import  Toolbar  from "@mui/material/Toolbar";
import  Typography  from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth='x1'>
                <Toolbar>
                    <Typography variant="h5">
                        Bank of Mortgager
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar