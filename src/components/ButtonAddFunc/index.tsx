import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface ButtonAddProps {
    onClick: () => void;
}

export function ButtonAddFunc({onClick}: ButtonAddProps){
    return(<>
        <Fab 
            color="primary" 
            size="medium"
            onClick={onClick}
            sx={{ position: 'fixed', bottom: '2rem', right: '2rem'}}>
                <AddIcon/>
        </Fab></>
    )
}