import React from 'react';
import { Field } from 'formik';

function PrimarySearchFields(props) {
  const {
    onInputFocus,
    // inputRefs,  optional additional properties
    // searchBarRef, optional additional properties
    // searchState: {
    //   breakpoints,
    //   isOpen,
    //   isHidden,
    //   isPrimaryOpen,
    //   setIsPrimaryOpen,
    //   isSecondaryOpen,
    //   setIsSecondaryOpen,
    //   isFiltersOpen,
    //   setIsFiltersOpen,
    //   isFieldsWrapped
    //   isStarted,
    //   isSearchBarFocused,
    //   setIsSearchBarFocused,
    //   currentInputElement,
    //   isSecondaryWidth,
    //   options,
    //   setCurrentInputElement,
    //   values,
    //   onExit: handleExit,
    // },
    // options: {
    //   allOpenMode,  //all options are passed with corresponding breakpoint value
    //   brAllOpenMode
    //   openOnMount,
    //   brOpenOnMount,
    //   hideOnMount,
    //   brHideOnMount,
    //   secondaryOpenBreakpoint,
    //   hideOnSearch,
    //   brHideOnSearch
    //   useIsStartedState
    //   brUseIsStartedState
    // }
  } = props;

  return (
    <label>
      <span>Search:</span>
      <Field
          // className={isSecondaryOpen ? 'primary--secondaryOpen' : 'primary--primaryOnly'}
        type="search"
        name="search"
        placeholder="enter product name"
        onFocus={onInputFocus}
      />
    </label>
  );
}

export default PrimarySearchFields;
