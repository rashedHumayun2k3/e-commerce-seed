import * as React from 'react';
import Chip from '@mui/material/Chip';
import { useGetAllCategoryQuery } from '@/redux/api/categoryAPI'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '@/app/asset/search-box.css';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  
  const { data: categoriesFromAPI, isLoading: loading, error,} = useGetAllCategoryQuery();
  const [categoriesNavigation, setCategoriesNavigation] = useState([]);

  useEffect(()=>{
      if(categoriesFromAPI){
          setCategoriesNavigation(categoriesFromAPI);
      }
  },[categoriesFromAPI]);

  const flattenedCategories = categoriesNavigation.flatMap((category) => {
    const categoryNames = [category.name];
    if (category.children) {
      categoryNames.push(...category.children.map((child) => child.name));
    }
    return categoryNames;
  });

  return (
    <Stack spacing={1} className='search-box-stack'>
       <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        className='nice-select select-search-category'
        disableClearable
        options={flattenedCategories}
        renderInput={(params) => (
          <TextField
            {...params}
            className='tob-bar-search-input'
            label="Enter your search key ..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
       </Stack>
 
  );
}
