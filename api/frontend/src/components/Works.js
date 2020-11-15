import React from "react";
import Picture from "./Picture";
import Product from "./Product";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// ProductができるまではPictureだけ表示
class Works extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Typography variant="h2" style={{color:"whitesmoke", alignContent:"center"}}>
                        WORKS
                </Typography>
                <Grid container direction="column" justify="center" alignItems="center" spacing={6}>

                <Grid item>
                </Grid>
                <Grid item>
                    <Picture/>
                </Grid>
                <Grid item>
                    <Product/>
                </Grid>

                </Grid>
            </React.Fragment>
        )
    }
}
export default Works;
