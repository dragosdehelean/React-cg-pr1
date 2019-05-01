import React, { Component } from "react";
// temp hardcoded data
import benefits from "./benefits";

const EnrollContext = React.createContext();

export class Provider extends Component {
  state = {
    benefits: benefits
  };

  /**
   *  Handles the selection of a new Variable Benefit
   */
  changeVariableBenefit = benefitName => {
    this.setState(prevState => {
      // changes the selectedBenefit
      prevState.benefits.variableBenefits.selectedBenefit = benefitName;

      // deselects all options from other Variable Benefits other than the current one
      prevState.benefits.variableBenefits.benefitList = prevState.benefits.variableBenefits.benefitList.map(
        benefit => ({
          ...benefit,
          options: benefit.options.map(option => ({
            ...option,
            selectedProvider: null
          }))
        })
      );

      return {
        benefits: prevState.benefits
      };
    });
  };

  /**
   *  Handles the selection of a new Provider inside an Option Set of a Benefit
   */
  changeVariableBenefitProvider = (benefitIndex, optionIndex, provider) => {
    this.setState(prevState => {
      prevState.benefits.variableBenefits.benefitList[benefitIndex].options[
        optionIndex
      ].selectedProvider = provider;
      // console.log(prevState)
      return { benefits: prevState.benefits };
    });
  };

  /**
   * Calculates if the user has selected all the necessary options for a Variable Benefit,
   *  or there are still options not made
   * 
   * @param {number} benefitIndex - benefit index 
   * @return {boolean}  
   */
  areBefitOptionsSelected = benefitIndex => {
    // gets the Variable Benefit
    const benefit = this.state.benefits.variableBenefits.benefitList[benefitIndex];
    // gets the options that have more than 1 provider
    const options = benefit.options.filter(option => option.providers.length > 1);

    // all options have a default provider
    if (options.length === 0) return true;
    // all options with more than 1 provider have a selected value
    if (options.filter(option=> option.selectedProvider === null ).length === 0 ) return true;
    return false;
  };

  /**
   * Calculates if an Option for a Benefit has a default value (has only one provider)
   * 
   * @param {number} benefitIndex - benefit index
   * @param {number} optionIndex - option index 
   * @return {boolean}
   */
  isDefaultOption = (benefitIndex, optionIndex) => {
    // get the list of providers
    const {providers} = this.state.benefits.variableBenefits.benefitList[benefitIndex].options[optionIndex];
    return providers.length > 1 ? false : true; 
  }

  render() {
    return (
      <EnrollContext.Provider
        value={{
          benefits: this.state.benefits,
          changeVariableBenefit: this.changeVariableBenefit,
          changeVariableBenefitProvider: this.changeVariableBenefitProvider,
          areBefitOptionsSelected: this.areBefitOptionsSelected,
          isDefaultOption: this. isDefaultOption
        }}
      >
        {this.props.children}
      </EnrollContext.Provider>
    );
  }
}
export const Consumer = EnrollContext.Consumer;
