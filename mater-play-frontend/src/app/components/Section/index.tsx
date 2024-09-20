import {Box, Container, Stack, Typography } from "@mui/material";
import Moviecard from "../MovieCard";

const movies =[
    {poster:'house-of-dragons-poster.jpg'},
    {poster:'2zmTngn1tYC1AvfnrFLhxeD82hz.jpg'},
    {poster:'9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster:'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    
    {poster:'house-of-dragons-poster.jpg'},
    {poster:'2zmTngn1tYC1AvfnrFLhxeD82hz.jpg'},
    {poster:'9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster:'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    
    {poster:'house-of-dragons-poster.jpg'},
    {poster:'2zmTngn1tYC1AvfnrFLhxeD82hz.jpg'},
    {poster:'9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster:'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'}

];


type SectionProps= {
  title: string;
}
function Section({
  title
}: SectionProps){
    return(
        <Box>
          <Container>
            <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  paddingTop: '2rem'
                }}
            >
                Para Toda Família
              { title}
            </Typography>
            <Stack
                direction="row"
                gap="5rem"
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem'
                }}
            >
                {movies.map(item=>(
                    <Moviecard poster={'assets/'+ item.poster}/>
                ))}
                

            </Stack>

            </Container>  
        </Box>
    )
}

export default Section;