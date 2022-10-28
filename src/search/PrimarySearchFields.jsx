import React from 'react';
import { Field } from 'formik';

function PrimarySearchFields(props) {
  const {
    onInputFocus,
    // inputRefs,  optional additional properties
    // searchBarRef, optional additional properties
    // breakpoints,
    // isOpen,
    // isHidden,
    // isPrimaryOpen,
    // setIsPrimaryOpen,
    // isSecondaryOpen,
    // setIsSecondaryOpen,
    // isFiltersOpen,
    // setIsFiltersOpen,
    // isStarted,
    // isSearchBarFocused,
    // setIsSearchBarFocused,
    // currentInputElement,
    // isSecondaryWidth,
    // options,
    // setCurrentInputElement,
    // values,
    // onExit: handleExit,
  } = props;

  // const {
  // allOpenMode, // all options are passed with corresponding breakpoint value
  // brAllOpenMode
  // openOnMount,
  // brOpenOnMount,
  // hideOnMount,
  // brHideOnMount,
  // secondaryOpenBreakpoint,
  // hideOnSearch,
  // brHideOnSearch
  // useIsStartedState
  // brUseIsStartedState
  // } = options;

  // function getInputRef() {
  //   if (inputRefs && inputRefs.current && inputRefs.current[0]) {
  //     return inputRefs.current[0].inputRef.current;
  //   }
  // }

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
