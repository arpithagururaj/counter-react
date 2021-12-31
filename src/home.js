import React from "react"
import{Card,CardContent,Grid} from '@material-ui/core';



const cards=()=>{

    return(
        
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={2} >
                        <Card style={{ backgroundColor: "#bb2020" }}>
                            <CardContent >
                            
                                Applied <br />
                              
                                
    
                            </CardContent>
                        </Card>
    
                    </Grid>
    
                    <Grid item xs={2} md={3} lg={2}>
    
                        <Card  style={{ backgroundColor: "pink" }}>
                            <CardContent>
                            Shortlisted <br />
                              
                            </CardContent>
                        </Card>
    
                    </Grid>
    
                    <Grid item xs={2} md={3} lg={2}>
                        <Card  style={{ backgroundColor: "#4caf50" }}>
                            <CardContent>
                                Rejected <br />
                              
                            </CardContent>
                        </Card>
    
                    </Grid>
    
                    <Grid item xs={2} md={3} lg={2}>
                        <Card  style={{ backgroundColor: "grey" }}>
                            <CardContent>
                                Total profiles <br />
                              
    
                            </CardContent>
                        </Card>
    
                    </Grid>
    
                    <Grid item xs={2} md={3} lg={2}>
                        <Card  style={{ backgroundColor: "#cddc39" }}>
                            <CardContent >
                           
                                Hired <br />
                             
                            </CardContent>
                        </Card>
                    </Grid>
    
                    <Grid item xs={2} md={3} lg={2}>
                        <Card  style={{ backgroundColor: "#e65100" }}>
                            <CardContent>
                                Discarded <br />
                               
                            </CardContent>
                        </Card>
                    </Grid>
    
                    {/* <Grid item xs={12} md={12} lg={12} >
                        <Card>
                            <CardContent style={{ height: 500, width: '100%' }}>
                                <DataGrid
                                    components={{
                                        Toolbar: CustomToolbar,
                                    }}
                                    // rows={profiles} columns={profilesColumns} pageSize={20}
                                    // rowsPerPageOptions={[10, 20, 50]}
                                    pagination onRowClick={showProfile} />
    
                            </CardContent>
                        </Card>
    
                    </Grid> */}
                </Grid>
                </div>
    )
}
export default cards