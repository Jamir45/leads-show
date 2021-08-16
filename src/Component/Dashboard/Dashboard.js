import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { MainDiv, TopCard, Item } from './ComponentStyle';
import SkeletonArticle from '../Skeletons/SkeletonArticle';
import axios from 'axios'

const Dashboard = () => {
   const [leads, setLeads] = useState(null)
   useEffect(() => {
      axios.get(`https://uilib.repairshopr.com/api/v1/leads`, {
         headers: { Authorization: "Bearer Tac39c7c396a8a4c97-710ac48f17f70e0757f9eb937f7b80f5" }
      })
         .then(result => {
            setLeads(result.data)
         })
   }, [])

   return (
      <MainDiv>
         <h1>Welcome our lead Dashboard</h1>
         <TopCard >
            <Grid container spacing={4}>
               {
                  leads && leads.leads.map(lead => {
                     const { first_name, last_name, email, address, phone, status, created_at } = lead
                     const date = new Date(created_at)
                     console.log(date.toDateString())
                     return <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Item elevation={3} >
                           <h3>{first_name + last_name}</h3>
                           <ul>
                              <li><b>Status:</b> {status}</li>
                              <li><b>Email:</b> {email}</li>
                              <li><b>Phone:</b> {phone}</li>
                              <li><b>Address:</b> {address}</li>
                              <li><b>Joined:</b> {date.toDateString()}</li>
                           </ul>
                        </Item>
                     </Grid>
                  })
               }
               {
                  !leads && [1, 2, 3, 4, 5, 6].map(n => {
                     return <Grid key={n} item xs={12} sm={6} md={4} lg={4}>
                        <SkeletonArticle />
                     </Grid>
                  })
               }
            </Grid>
         </TopCard>
      </MainDiv>
   );
};

export default Dashboard;