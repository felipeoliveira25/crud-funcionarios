import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';


export const StyledTableContainer = styled(TableContainer)`
  && {
    width: 100%;
    
  }
`;



export const StyledTableCellHead = styled(TableCell)`
  && {
    background-color: #f0f0f0;
    color: #333;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.6rem;
    font-weight: 800;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 0.8rem;
    }

    @media (min-width: ${breakpoints.md}) {
      font-size: 1.0rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      font-size: 1.2rem;
    }
  }
`;

export const StyledTableCellBody = styled(TableCell)`
  && {
    color: #333;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.6rem;
    font-weight: 600;
    border-left: 1px solid #000;
    padding: 8px;

    @media (min-width: ${breakpoints.sm}) {
      padding: 10px;
      font-size: 0.7rem;
    }

    @media (min-width: ${breakpoints.md}) {
      padding: 12px;
      font-size: 0.8rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      padding: 14px;
      font-size: 0.9rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      padding: 16px;
      font-size: 1rem;
    }
  }
`;

export const TableCellIcons = styled(StyledTableCellBody)`
  && {
    @media (min-width: ${breakpoints.sm}) {
      justify-content: space-evenly;
      display: flex;
    }

    @media (min-width: ${breakpoints.md}) {
      justify-content: space-around;
    }
  }
`;

export const StyledTableRow = styled(TableRow)`
  && {
    
    background-color: #fff;
    height: 10px;

    
    @media (min-width: ${breakpoints.sm}) {
      background-color: #f9f9f9;
    }

    
    @media (min-width: ${breakpoints.md}) {
      background-color: #f2f2f2;
    }

    
    @media (min-width: ${breakpoints.lg}) {
      background-color: #e9e9e9;
    }

   
    @media (min-width: ${breakpoints.xl}) {
      background-color: #e0e0e0;
    }

   
    & > ${StyledTableCellBody}, & > ${StyledTableCellHead} {
      padding: 4px;

      @media (min-width: ${breakpoints.sm}) {
        padding: 10px;
      }

      @media (min-width: ${breakpoints.md}) {
        padding: 12px;
      }

      @media (min-width: ${breakpoints.lg}) {
        padding: 14px;
      }

      @media (min-width: ${breakpoints.xl}) {
        padding: 16px;
      }
    }
  }
`;

export const IconEdit = styled(EditOutlinedIcon)`
    &&{
        width: 1rem;
        height: 1rem;

        @media (min-width: ${breakpoints.md}) {
            width: 1.2rem;
            height: 1.2rem;
        }
        @media (min-width: ${breakpoints.xl}) {
            width: 1.4rem;
            height: 1.4rem;
        }
    }
`

export const TrashIcon = styled(DeleteOutlineOutlinedIcon)`
     &&{
        width: 1rem;
        height: 1rem;

        @media (min-width: ${breakpoints.md}) {
            width: 1.2rem;
            height: 1.2rem;
        }
        @media (min-width: ${breakpoints.xl}) {
            width: 1.4rem;
            height: 1.4rem;
        }
    }
`