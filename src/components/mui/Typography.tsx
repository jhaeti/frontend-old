// import { Typography } from "@mui/material";
import Typography from "@mui/material/Typography";

const MyTypography = () => {
    return (
        <div>
        <Typography>Default</Typography>
        <Typography variant="h1">This is an h1 elem</Typography>
        <Typography variant="h2">This is an h2 elem</Typography>
        <Typography variant="h3">This is an h3 elem</Typography>
        <Typography variant="h4" component="h1" gutterBottom >This is an h4 elem</Typography>
        <Typography variant="h5">This is an h5 elem</Typography>
        <Typography variant="h6">This is an h6 elem</Typography>
            
        <Typography variant="subtitle1">This is an subtitle1 elem</Typography>
        <Typography variant="subtitle2">This is an h6 elem</Typography>

        <Typography variant="body1">This is an h6 elem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis unde, voluptates maiores dolor deserunt exercitationem commodi laboriosam reiciendis ducimus nulla provident saepe, quasi minus explicabo incidunt. Corrupti, odit sint.</Typography>
        
        </div>
    );
}

export default MyTypography;