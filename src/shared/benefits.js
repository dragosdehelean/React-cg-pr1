import React from 'react';
import LocalGasStation from "@material-ui/icons/LocalGasStation";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Add from "@material-ui/icons/Add";
import PensionIcon from "../assets/img/PensionIcon";

const benefits = {
  campaign_id: 1,
  chosenMajorOption: null,
  majorOptions: [
        { 
            id: 0,
            text: "1. Only Gas Tickets (150 RON)",
            secondaryOptions: [
                {
                    name: "Gas Tickets Providers",
                    providers: [ 
                        "MOL",
                        "Rompetrol",
                       
                    ],
                    chosenProvider: null,
                },               
            ],
            illustration: <LocalGasStation style={{ fontSize: 40 }} />
        },
        {
            id: 1,
            text:  "2. Only Sodexo Card (150 RON)",
            secondaryOptions: [
                {
                    name: "Sodexo Card Provider",
                    providers: [ 
                        "Sodexo",                       
                    ],
                    chosenProvider: null,
                },
            ],
            illustration:  <GiftCard style={{ fontSize: 40 }} />
        },
        {
            id: 2,
            text:  "3. Only Private Pension (150 RON)",
            secondaryOptions: [
                {
                    name: "Private Pension Providers",
                    providers: [ 
                        "Certinvest",
                        "BCR"                       
                    ],
                    chosenProvider: null,
                },
            ],
            illustration: <PensionIcon style={{ fontSize: 40 }} viewBox="0 0 1025 1024" />
        },
        {
            id: 3,
            text:  "4. Gas Tickets (90 RON) and Private Pension (60 RON)",
            secondaryOptions: [
                {
                    name: "Gas Tickets Providers",
                    providers: [ 
                        "MOL",
                        "Rompetrol",                                              
                    ],
                    chosenProvider: null,
                },
                {
                    name: "Private Pension Providers",
                    providers: [ 
                        "Certinvest",
                        "BCR"                                                
                    ],
                    chosenProvider: null,
                },
            ],
            illustration: <React.Fragment>
                            <LocalGasStation style={{ fontSize: 30 }}/>
                            <Add />
                            <PensionIcon viewBox="0 0 1025 1024" style={{ fontSize: 30 }}/>
                          </React.Fragment>,
        },
        {
            id: 4,
            text:  "5. Sodexo Card (90 RON) and Private Pension (60 RON)",
            secondaryOptions: [
                {
                    name: "Sodexo Card Provider",
                    providers: [ 
                        "Sodexo",                                             
                    ],
                    chosenProvider: null,
                },
                {
                    name: "Private Pension Providers",
                    providers: [ 
                        "Certinvest",
                        "BCR"                                                
                    ],
                    chosenProvider: null,
                },
            ],
            illustration: <React.Fragment>
                            <GiftCard style={{ fontSize: 30 }} />
                            <Add />
                            <PensionIcon viewBox="0 0 1025 1024" style={{ fontSize: 30 }}/>
                          </React.Fragment>,
        }
    ],
    
};

export default benefits;
