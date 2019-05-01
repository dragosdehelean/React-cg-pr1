import React from "react";
import LocalGasStation from "@material-ui/icons/LocalGasStation";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Add from "@material-ui/icons/Add";
import PensionIcon from "../../assets/img/PensionIcon";

const benefits = {
	campaign_id: 1,
	standardBenefits: {},
	variableBenefits: {
		selectedBenefit: null,
		benefitList: [
			{
				id: 0,
				name: "1. Only Gas Tickets (150 RON)",
				options: [
					{
						name: "Gas Tickets Provider",
						providers: ["MOL", "Rompetrol"],
						selectedProvider: null
					}
				],
				illustration: <LocalGasStation style={{ fontSize: 40 }} />
			},
			{
				id: 1,
				name: "2. Only Sodexo Card (150 RON)",
				options: [
					{
						name: "Sodexo Card Provider",
						providers: ["Sodexo"],
						selectedProvider: null
					}
				],
				illustration: <GiftCard style={{ fontSize: 40 }} />
			},
			{
				id: 2,
				name: "3. Only Private Pension (150 RON)",
				options: [
					{
						name: "Private Pension Provider",
						providers: ["Certinvest", "BCR"],
						selectedProvider: null
					}
				],
				illustration: (
					<PensionIcon style={{ fontSize: 40 }} viewBox="0 0 1025 1024" />
				)
			},
			{
				id: 3,
				name: "4. Gas Tickets (90 RON) and Private Pension (60 RON)",
				options: [
					{
						name: "Gas Tickets Provider",
						providers: ["MOL", "Rompetrol"],
						selectedProvider: null
					},
					{
						name: "Private Pension Provider",
						providers: ["Certinvest", "BCR"],
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
				id: 4,
				name: "5. Sodexo Card (90 RON) and Private Pension (60 RON)",
				options: [
					{
						name: "Sodexo Card Provider",
						providers: ["Sodexo"],
						selectedProvider: null
					},
					{
						name: "Private Pension Provider",
						providers: ["Certinvest", "BCR"],
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
