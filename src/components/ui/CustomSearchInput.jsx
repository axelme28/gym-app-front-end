import React from 'react';
import { TextField, InputAdornment, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Custom styled TextField
const CustomSearchInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px', // Rounded corners
    backgroundColor: '#221f24', // Dark background
    '& fieldset': {
      borderColor: '#555', // Custom border color
    },
    '&:hover fieldset': {
      borderColor: '#888', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#221f24', // Border color when focused
    },
  },
  '& .MuiInputBase-input': {
    color: '#fff', // Text color
    padding: '10px 12px', // Adjust padding for better appearance
  },
  '& .MuiSvgIcon-root': {
    color: '#888', // Icon color
  },
}));

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value); // Optional: pass search value to parent
    }
  };

  return (
    <CustomSearchInput
      placeholder="Search..."
      variant="outlined"
      fullWidth
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
