import React from "react";

import MuiStack from "@mui/material/Stack";

import {
  StyledRecordsHeader,
  StyledHeaderBestRecord,
  StyledHeaderBestRecordTitle,
  StyledHeaderRecordPosition,
  StyledHeaderRecordPositionFrom,
} from "./styled";
import { getNumberWithSuffix, getCompactNumber } from "../../../utils";

const RecordsHeader = () => {
  return (
    <StyledRecordsHeader>
      <MuiStack>
        <StyledHeaderBestRecord>3:44</StyledHeaderBestRecord>
        <StyledHeaderBestRecordTitle>
          Your Last record
        </StyledHeaderBestRecordTitle>
      </MuiStack>

      <MuiStack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background:
            "radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(78, 32, 130, 0.16) 0%, rgba(12, 12, 76, 0.16) 71.87%), #131444",
          borderRadius: "50%",
          width: 64,
          height: 64,
        }}
      >
        <StyledHeaderRecordPosition>
          # {getNumberWithSuffix(144)}
        </StyledHeaderRecordPosition>

        <StyledHeaderRecordPositionFrom>
          from {getCompactNumber(15000)}
        </StyledHeaderRecordPositionFrom>
      </MuiStack>
    </StyledRecordsHeader>
  );
};

export default RecordsHeader;
