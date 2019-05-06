import React from "react";
import LocalGasStation from "@material-ui/icons/LocalGasStation";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Add from  "@material-ui/icons/Add";
import PensionIcon from "../assets/img/PensionIcon";

import mgDental from "../assets/img/mg_dental.jpg";
import reginaMaria from "../assets/img/regina_maria.jpg";
import sanador from "../assets/img/sanador.jpg";


const benefits = {
	campaign_id: 1,
	standardBenefits: [
		{
			id: "1",
			name: "1. Choose your Medical Service Provider",
			text: "1. Choose your Medical Service Provider",
			options: [
				{ name: "Reteaua Regina Maria", illustration: reginaMaria },
				{ name: "Sanador", illustration: sanador },
			],
			selectedProvider: null
		},
		{
			id: "2",
			name: "2. Dental Services Provider (default option)",
			text: "2. Dental Services Provider (default option)",
			options: [
				{
					name: "MG Dental",
					illustration: mgDental
				}
			],
			selectedProvider: null
		}
	],
	variableBenefits: {
		selectedBenefit: null,
		benefitsList: [
			{				
				id: "3",
				name: "1. Only Gas Tickets (150 RON)",
				text: "1. Only Gas Tickets (150 RON)",
				optionGroups: [
					{
						name: "G1",
						text: "Gas Tickets Provider",
						options: ["MOL", "Rompetrol"],
						selectedProvider: null
					}
				],
				illustration: <LocalGasStation style={{ fontSize: 40 }} />
			},
			{
				id: "4",
				name: "2. Only Sodexo Card (150 RON)",
				text: "2. Only Sodexo Card (150 RON)",
				optionGroups: [
					{
						name: "G1",
						text: "Sodexo Card Provider",
						options: ["Sodexo"],
						selectedProvider: null
					}
				],
				illustration: <GiftCard style={{ fontSize: 40 }} />
			},
			{
				id: "5",
				name: "3. Only Private Pension (150 RON)",
				text: "3. Only Private Pension (150 RON)",
				optionGroups: [
					{
						name: "G1",
						text: "Private Pension Provider",
						options: ["Certinvest", "BCR"],
						selectedProvider: null
					}
				],
				illustration: (
					<PensionIcon style={{ fontSize: 40 }} viewBox="0 0 1025 1024" />
				)
			},
			{
				id: "6",
				name: "4. Gas Tickets (90 RON) and Private Pension (60 RON)",
				text: "4. Gas Tickets (90 RON) and Private Pension (60 RON)",
				optionGroups: [
					{
						name: "G1",
						text: "Gas Tickets Provider",
						options: ["MOL", "Rompetrol"],
						selectedProvider: null
					},
					{
						name: "G2",
						text: "Private Pension Provider",
						options: ["Certinvest", "BCR"],
						selectedProvider: null
					}
				],
				illustration: (
					<React.Fragment>
						<LocalGasStation style={{ fontSize: 30 }} />
						<Add />
						<PensionIcon
							viewBox="0 0 1025 1024"
							style={{ fontSize: 30 }}
						/>
					</React.Fragment>
				)
			},
			{
				id: "7",
				name: "5. Sodexo Card (90 RON) and Private Pension (60 RON)",
				text: "5. Sodexo Card (90 RON) and Private Pension (60 RON)",
				optionGroups: [
					{
						name: "G1",
						text: "Sodexo Card Provider",
						options: ["Sodexo"],
						selectedProvider: null
					},
					{
						name: "G2",
						text: "Private Pension Provider",
						options: ["Certinvest", "BCR"],
						selectedProvider: null
					}
				],
				illustration: (
					<React.Fragment>
						<GiftCard style={{ fontSize: 30 }} />
						<Add />
						<PensionIcon
							viewBox="0 0 1025 1024"
							style={{ fontSize: 30 }}
						/>
					</React.Fragment>
				)
			}
		]
	}
};

export default benefits;
