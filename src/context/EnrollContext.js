import React, { useReducer, useMemo } from "react";
// temp hardcoded data

import { json } from "./json2";
import benefits from "./benefits";

const initialState = {
	standardBenefits: benefits.standardBenefits,
	variableBenefits: benefits.variableBenefits
};

export const EnrollContext = React.createContext(initialState);
export const DispatchContext = React.createContext();



export const Consumer = EnrollContext.Consumer;

// componentDidMount() {
// 	/**
// 	 * Compun this.state.variableBenefits pe baza informatiilor din JSON
// 	 *
// 	 * TODO:
// 	 *  - trebuie compus standardBenefits
// 	 *
// 	 *  - trebuie asociate imaginile
// 	 */

// 	// iau toate beneficiile variabile si le pun intr-o noua structura
// 	const newVarBen = json.benefits.filter(
// 		benefit => benefit.benefit_type === "Variable"
// 	);

// 	// merg prin fiecare beneficiu Variabil
// 	let benefitsList = newVarBen.map(ben => {
// 		// initializez array-ul de Grupuri. Il voi umple cu continut si il voi adauga la final, pentru fiecare beneficiu ben
// 		let optionGroups = [];

// 		// creez grupurile ca obiecte, care momentan vor avea doar name. Pentru asta, filtrez prin numele de grupuri unice
// 		ben.attributes
// 			.map(attr => attr.group_name)
// 			.filter((group, pos, self) => self.indexOf(group) === pos)
// 			.forEach(group => {
// 				// pune continut in optionGroups
// 				optionGroups.push({ name: group });
// 			});

// 		// trec prin toate obiectele nou formate de tip Group si creez celelalte proprietati altele decat .name
// 		optionGroups.forEach((group, index) => {
// 			// pentru vizibilitate, initializez toate proprietatile pe care trebuie sa le creez
// 			optionGroups[index].text = "";
// 			optionGroups[index].selectedProvider = null;
// 			optionGroups[index].options = [];

// 			ben.attributes
// 				.filter(attr => attr.group_name === group.name)
// 				.forEach(attr => {
// 					if (attr.attribute_name === "OptionName") {
// 						optionGroups[index].options.push(attr.attribute_value);
// 					} else if (attr.attribute_name === "GroupText") {
// 						optionGroups[index].text = attr.attribute_value;
// 					}
// 				});
// 		});

// 		return {
// 			name: ben.benefit_name,
// 			text: ben.benefit_text,
// 			optionGroups
// 		};
// 	});

// 	const variableBenefits = {
// 		selectedBenefit: null,
// 		benefitsList: benefitsList
// 	};

// 	// schimb state-ul cu valorile primite de la JSON
// 	this.setState({ variableBenefits: variableBenefits });
// }

/**
 *  REDUCER ACTIONS
 */
let reducer = (state, action) => {
	switch (action.type) {
		/**
		 * Handles the selection of a new Provider inside an Option Set of a Standard Benefit
		 */
		case "changeStandardBenefitProvider":
			state.standardBenefits[action.benefitIndex].selectedProvider =
				action.providerName;
			return { ...state, standardBenefits: state.standardBenefits };
		/**
		 *  Handles the selection of a new Variable Benefit
		 */
		case "changeVariableBenefit":
			// changes the selectedBenefit
			state.variableBenefits.selectedBenefit = action.benefitName;

			// deselects all options from other Variable Benefits other than the current one
			state.variableBenefits.benefitsList = state.variableBenefits.benefitsList.map(
				benefit => ({
					...benefit,
					optionGroups: benefit.optionGroups.map(group => ({
						...group,
						selectedProvider: null
					}))
				})
			);
			return { ...state, variableBenefits: state.variableBenefits };
		/**
		 * Handles the selection of a new Provider inside an Option Set of a Variable Benefit
		 */
		case "changeVariableBenefitProvider":
			const { benefitIndex, groupIndex, optionName } = action;
			state.variableBenefits.benefitsList[benefitIndex].optionGroups[
				groupIndex
			].selectedProvider = optionName;
			return { ...state, variableBenefits: state.variableBenefits };
		default:
			return state;
	}
};

export const Provider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { standardBenefits, variableBenefits } = state;

	
	const dispatchValue = useMemo(() => ({
		dispatch
	}), [dispatch]);

	const enrollValue = { standardBenefits, variableBenefits};

	return (
		<DispatchContext.Provider value={dispatchValue}>
			<EnrollContext.Provider value={enrollValue}>
				{props.children}
			</EnrollContext.Provider>
		</DispatchContext.Provider>
	);
};
