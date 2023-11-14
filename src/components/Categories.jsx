import { Stack, Typography } from "@mui/material"
import { addCategory } from "../redux/categoryState/categorySlice"
import { useDispatch} from "react-redux"   



function Categories() {
    const Categories = [           
        {
            id: 1,
            Category: "men"          
        },
        {
            id: 2,
            Category: "women"     
        },
        {
            id: 3,
            Category: "accessories"      
        },
    ]

    const dispatch=useDispatch()

    return (
        <Stack  gap={3} mt={3} sx={{ 
            marginLeft:{xs:2,sm:0},
            flexDirection:{xs:"row",sm:"column"},
            justifyContent:{xs:"center",sm:"flex-start"},
            mr:{xs:0,sm:8}
        }} >
             <Typography sx={{ 
                fontSize:{sm:20}
              }}>Category</Typography>
            {
            Categories.map((item) => {    
                return (
                    <Stack key={item.id} direction={'row'} gap={1}>
                        <input onClick={(e)=>{
                           dispatch(addCategory({
                            checked:e.target.checked,
                            value:e.target.value       
                           }))   
                        }} type="checkbox" value={item.Category}  />    
                        <span>{item.Category}</span>      

                    </Stack>            
                )   
            })
        }
        </Stack>
    )
}

export default Categories