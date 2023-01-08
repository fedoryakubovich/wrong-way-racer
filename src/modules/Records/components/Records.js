import React from "react";

import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiStack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

import { getNumberWithSuffix } from "../../../utils";
import RecordsDetails from "./RecordsDetails";
import RecordsHeader from "./RecordsHeader";
import {
  StyledRecordsContainer,
  StyledRecordsAccordion,
  StyledRecordsUsername,
  StyledStatsPrimaryText,
  StyledStatsTitle,
} from "./styled";

const Records = ({ players }) => {
  return (
    <StyledRecordsContainer>
      <RecordsHeader />

      <List sx={{ maxHeight: 195, overflowY: "scroll" }} disablePadding>
        {players.map((player) => {
          return (
            <ListItem disablePadding>
              <StyledRecordsAccordion key={`records-${player.rank}`}>
                <MuiAccordionSummary>
                  <MuiStack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <StyledRecordsUsername className="username">
                      {player.name}
                    </StyledRecordsUsername>

                    <MuiStack direction="row">
                      <MuiStack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: 70, background: "#261B50", px: "2px" }}
                      >
                        <StyledStatsTitle>Record</StyledStatsTitle>

                        <StyledStatsPrimaryText>
                          {player.record}
                        </StyledStatsPrimaryText>
                      </MuiStack>

                      <MuiStack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          width: 42,
                          background: "#120837",
                          padding: "4px 9px 2px",
                        }}
                      >
                        <StyledStatsTitle
                          sx={{ color: "rgba(255, 251, 251, 0.4)" }}
                        >
                          Rank
                        </StyledStatsTitle>

                        <StyledStatsPrimaryText>
                          {getNumberWithSuffix(player.rank)}
                        </StyledStatsPrimaryText>
                      </MuiStack>
                    </MuiStack>
                  </MuiStack>
                </MuiAccordionSummary>

                <RecordsDetails player={player} />
              </StyledRecordsAccordion>
            </ListItem>
          );
        })}
      </List>
    </StyledRecordsContainer>
  );
};

export default Records;
