import React, { useState } from 'react';
import { SearchBarMenu, SearchBarProvider } from '@carpenjk/searchbar';
import PrimarySearchFields from './PrimarySearchFields';
import SecondarySearchFields from './SecondarySearchFields';
import Filters from './Filters';
import searchSchema from './validation';
import theme from '../theme';
import Results from './Results';

function Search({ data }) {
  const [results, setResults] = useState(data);
  const searchData = (values) => {
    setResults(data.filter((item) => {
      const searchFilter = values.search ? item.name.match(new RegExp(values.search)) : true;
      const sizeFilter = values.size ? item.size === values.size : true;
      const minPriceFilter = values.minPrice ? item.price >= values.minPrice : true;
      const maxPriceFilter = values.maxPrice ? item.price <= values.maxPrice : true;
      const colorsFilter = values.colors ? values.colors.includes(item.color) : true;
      return searchFilter && sizeFilter && minPriceFilter && maxPriceFilter && colorsFilter;
    }));
  };
  return (
    <SearchBarProvider
      initialValues={{
        search: '',
        size: '',
        minPrice: '',
        maxPrice: '',
        colors: '',
      }}
      search={searchData} // search function to call on search
      theme={theme}
      options={{
      // option values can vary by breakpoint
        alwaysShowButtons: [false, true], // default = true
        useIsStartedState: true, // default = false
        searchOnExit: true,
        // additional options
        // openOnMount = false,
        // allOpenMode = false,
        // hideOnMount = false,
        // secondaryOpenBreakpoint = 1, //does not support multiple values
        // hideOnSearch,
        // keepOpenOnSearch = false
        // breakpointToWrap = 1 //does not support multiple values
      }}
      validationSchema={searchSchema}
    >
      <SearchBarMenu
        PrimarySearchFields={PrimarySearchFields}
        SecondarySearchFields={SecondarySearchFields}
        FilterFields={Filters}
        openMaxWidth={['none', '1000px']}

      />
      <Results results={results} />
    </SearchBarProvider>
  );
}

export default Search;
