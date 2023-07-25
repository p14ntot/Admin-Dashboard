import Button from "./Button";
import Titles from "./Titles";
import TableComponent from "./TableComponent";


const MyTable = () => {
    
    let info=[
        {userName:'Anastasia Masadi',userActive:'Active',phoneNumber:'69123456789',position:'Designer',department:'Pixel Unicorn',activity:'1 day ago'},
        {userName:'Eirini Skapeti',userActive:'Active',phoneNumber:'6987654321',position:'Full stack developer',department:'Pixel Unicorn',activity:'1 day ago'},
        {userName:'Nikitas Tsinnas',userActive:'Active',phoneNumber:'6976543298',position:'Full stack developer',department:'Pixel Unicorn',activity:'2 day ago'},
        {userName:'Petros Loukas',userActive:'Inactive',phoneNumber:'69543211234',position:'Data scientist',department:'Pixel Unicorn',activity:'3 day ago'},
        {userName:'Giorgos Ntotsios',userActive:'Inactive',phoneNumber:'69123123123',position:'Front end developer',department:'Pixel Unicorn',activity:'4 day ago'}
    ]
    
    return ( 

        <div className="table-wrapper">
            <Titles></Titles>
                  
                <TableComponent userName={info[0].userName} active={info[0].userActive} phoneNumber={info[0].phoneNumber} position={info[0].position} department={info[0].department} activity={info[0].activity}></TableComponent>
                <TableComponent userName={info[1].userName} active={info[1].userActive} phoneNumber={info[1].phoneNumber} position={info[1].position} department={info[1].department} activity={info[1].activity}></TableComponent>
                <TableComponent userName={info[2].userName} active={info[2].userActive} phoneNumber={info[2].phoneNumber} position={info[2].position} department={info[2].department} activity={info[2].activity}></TableComponent>
                <TableComponent userName={info[3].userName} active={info[3].userActive} phoneNumber={info[3].phoneNumber} position={info[3].position} department={info[3].department} activity={info[3].activity}></TableComponent>
                <TableComponent userName={info[4].userName} active={info[4].userActive} phoneNumber={info[4].phoneNumber} position={info[4].position} department={info[4].department} activity={info[4].activity}></TableComponent>
                <Button/>
        
            
        </div>
     );
}
 
export default MyTable; 


