import React from 'react';
import { Field } from 'formik';

function Filters(props) {
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
    // isFieldsWrapped,
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

  return (
    <div className="filtersWrapper">
      <div className="filterGroup">
        <label>
          <span>Min Price:</span>
          <Field
            as="select"
            name="minPrice"
            onFocus={onInputFocus}
          >
            <option hidden value="">Min Price</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
          </Field>
        </label>
        <label>
          <span>Max Price:</span>
          <Field
            as="select"
            name="maxPrice"
            onFocus={onInputFocus}
          >
            <option hidden value="">Max Price</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
          </Field>
        </label>
      </div>
      <div className="filterGroup">
        <span>Color</span>
        <div className="filterValues">
          <label>
            <Field
              type="checkbox"
              name="colors"
              placeholder="colors"
              value="blue"
              onFocus={onInputFocus}
            />
            blue
          </label>
          <label>
            <Field
              type="checkbox"
              name="colors"
              placeholder="colors"
              value="black"
              onFocus={onInputFocus}
            />
            black
          </label>
          <label>
            <Field
              type="checkbox"
              name="colors"
              placeholder="colors"
              value="green"
              onFocus={onInputFocus}
            />
            green
          </label>
          <label>
            <Field
              type="checkbox"
              name="colors"
              placeholder="colors"
              value="red"
              onFocus={onInputFocus}
            />
            red
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
