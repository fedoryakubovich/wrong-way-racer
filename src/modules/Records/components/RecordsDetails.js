import React from "react";

import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiStack from "@mui/material/Stack";

import { StyledRecordsDetailsItem } from "./styled";

const RecordsDetails = ({ player }) => {
  return (
    <MuiAccordionDetails>
      <MuiStack direction="row" alignItems="center">
        <StyledRecordsDetailsItem>
          <span className="marked">#{player.gamesPlayed}</span> games played
        </StyledRecordsDetailsItem>
      </MuiStack>

      <MuiStack direction="row" alignItems="center">
        <StyledRecordsDetailsItem>
          Worst record: <span className="marked">#{player.worstRecord}</span>
        </StyledRecordsDetailsItem>
      </MuiStack>

      <MuiStack direction="row" alignItems="center">
        <StyledRecordsDetailsItem>
          Highest Rank: <span className="marked">#{player.highestRank}</span>
        </StyledRecordsDetailsItem>
      </MuiStack>
    </MuiAccordionDetails>
  );
};

export default RecordsDetails;
