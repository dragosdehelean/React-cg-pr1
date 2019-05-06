export const json = {
	id: 1,
	campaign_name: "TestVlad",
	company_id: "RO01",
	start_data: "2019-04-24 00:00:00",
	end_date: "2019-04-25",
	start_enrollment: "2019-04-26 00:00:00",
	end_enrollment: "2019-04-27 00:00:00",
	cost_centre: "123",
	campaign_status: "Draft",
	recurent_flag: "0",
	updated_at: "2019-04-24 00:00:00",
	modified_by: null,
	created_at: "2019-04-24 00:00:00",
	created_by: null,
	deleted_at: null,
	benefits: [
		{
			id: 1,
			user_name: "",
			benefit_name: "Medical",
			benefit_text: "Ce clinica iti alegi?",
			benefit_type: "Standard",
			campaign_id: 1,
			benefit_status: "Active",
			created_at: "2019-04-24 00:00:00",
			created_by: null,
			updated_at: "2019-04-24 00:00:00",
			updated_by: null,
			attributes: [
				{
					id: 1,
					benefit_id: 1,
					attribute_name: "OptionName",
					attribute_value: "ReginaMaria",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 2,
					benefit_id: 1,
					attribute_name: "OptionName",
					attribute_value: "Sanador",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				}
			]
		},
		{
			id: 2,
			user_name: "",
			benefit_name: "Benzina",
			benefit_text: "Ce card benzina vrei?",
			benefit_type: "Variable",
			campaign_id: 1,
			benefit_status: "Active",
			created_at: "2019-04-24 00:00:00",
			created_by: null,
			updated_at: "2019-04-24 00:00:00",
			updated_by: null,
			attributes: [
				{
					id: 3,
					benefit_id: 2,
					attribute_name: "OptionName",
					attribute_value: "MOL",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 4,
					benefit_id: 2,
					attribute_name: "OptionName",
					attribute_value: "Rompetrol",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				}
			]
		},
		{
			id: 3,
			user_name: "",
			benefit_name: "BenzinaCUPensie",
			benefit_text: "Gas Tickets (90 RON) and Private Pension (60RON)",
			benefit_type: "Variable",
			campaign_id: 1,
			benefit_status: "Active",
			created_at: "2019-04-24 00:00:00",
			created_by: null,
			updated_at: "2019-04-24 00:00:00",
			updated_by: null,
			attributes: [
				{
					id: 5,
					benefit_id: 3,
					attribute_name: "OptionName",
					attribute_value: "Mol",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 6,
					benefit_id: 3,
					attribute_name: "OptionName",
					attribute_value: "Rompetrol",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 7,
					benefit_id: 3,
					attribute_name: "GroupText",
					attribute_value: "Alege Cardul de Benzina",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 8,
					benefit_id: 3,
					attribute_name: "BenefitValue",
					attribute_value: "90 RON",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 9,
					benefit_id: 3,
					attribute_name: "OptionName",
					attribute_value: "BCR",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 10,
					benefit_id: 3,
					attribute_name: "OptionName",
					attribute_value: "CertInvest",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 11,
					benefit_id: 3,
					attribute_name: "GroupText",
					attribute_value: "Alege provider pensie",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 12,
					benefit_id: 3,
					attribute_name: "BenefitValue",
					attribute_value: "60 RON",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				}
			]
		},
		{
			id: 4,
			user_name: "",
			benefit_name: "SodexoCuPensie",
			benefit_text: "Sodexo Card (90 RON) and Private Pension (60 RON)",
			benefit_type: "Variable",
			campaign_id: 1,
			benefit_status: "Active",
			created_at: "2019-04-24 00:00:00",
			created_by: null,
			updated_at: "2019-04-24 00:00:00",
			updated_by: null,
			attributes: [
				{
					id: 13,
					benefit_id: 4,
					attribute_name: "OptionName",
					attribute_value: "Sodexo",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 14,
					benefit_id: 4,
					attribute_name: "GroupText",
					attribute_value: "Default provider",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 15,
					benefit_id: 4,
					attribute_name: "BenefitValue",
					attribute_value: "90 RON",
					group_name: "G1",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 16,
					benefit_id: 4,
					attribute_name: "OptionName",
					attribute_value: "BCR",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 17,
					benefit_id: 4,
					attribute_name: "OptionName",
					attribute_value: "CertInvest",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 18,
					benefit_id: 4,
					attribute_name: "GroupText",
					attribute_value: "Alege provider pensie",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				},
				{
					id: 19,
					benefit_id: 4,
					attribute_name: "BenefitValue",
					attribute_value: "60 RON",
					group_name: "G2",
					created_at: "2019-04-24 00:00:00",
					created_by: null,
					updated_at: "2019-04-24 00:00:00",
					modified_by: null
				}
			]
		}
	]
};
