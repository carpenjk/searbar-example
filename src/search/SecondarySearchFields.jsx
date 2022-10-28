import React from 'react';
import { Field } from 'formik';

function SecondarySearchFields(props) {
  const {
    // options,
    onInputFocus,
    // inputRefs,  optional additional properties
    // searchBarRef, optional additional properties
    // breakpoints,
    // isOpen,
    // setIsOpen,
    // isHidden,
    // setIsHidden,
    // isPrimaryOpen,
    // setIsPrimaryOpen,
    // isSecondaryOpen,
    // setIsSecondaryOpen,
    // isFiltersOpen,
    // setIsFiltersOpen,
    // setIsStarted,
    // isStarted,
    isFieldsWrapped,
    // isSearchBarFocused,
    // setIsSearchBarFocused,
    // currentInputElement,
    // isSecondaryWidth,
    // setCurrentInputElement,
    // values,
    // onExit: handleExit,
    // breakpointToWrap,
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
  const labelClass = isFieldsWrapped ? 'isWrapped' : '';
  return (
    <label className={labelClass}>
      <span>Size:</span>
      <Field
        as="select"
        name="size"
        onFocus={onInputFocus}
      >
        <option hidden value="">Size</option>
        <option value="sm">sm</option>
        <option value="md">md</option>
        <option value="lg">lg</option>
      </Field>
    </label>
  );
}

export default SecondarySearchFields;
