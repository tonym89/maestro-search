import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import {
  getHighlightedParts,
  getPropertyByPath,
} from "instantsearch.js/es/lib/utils";
import { Typography } from "../Typography";

function HighlightPart({ children, isHighlighted, variant }) {
  return (
    <Typography
      style={isHighlighted && styles.highlighted}
      center
      variant={variant}
    >
      {children}
    </Typography>
  );
}

export function Highlight({ hit, variant, attribute, separator = ", " }) {
  const { value: attributeValue = "" } =
    getPropertyByPath(hit._highlightResult, attribute) || {};
  const parts = getHighlightedParts(attributeValue);

  return (
    <Typography variant={variant} center>
      {parts.map((part, partIndex) => {
        if (Array.isArray(part)) {
          const isLastPart = partIndex === parts.length - 1;

          return (
            <Fragment key={partIndex}>
              {part.map((subPart, subPartIndex) => (
                <HighlightPart
                  key={subPartIndex}
                  isHighlighted={subPart.isHighlighted}
                  variant={variant}
                >
                  {subPart.value}
                </HighlightPart>
              ))}

              {!isLastPart && separator}
            </Fragment>
          );
        }

        return (
          <HighlightPart
            key={partIndex}
            isHighlighted={part.isHighlighted}
            variant={variant}
          >
            {part.value}
          </HighlightPart>
        );
      })}
    </Typography>
  );
}

const styles = StyleSheet.create({
  highlighted: {
    fontWeight: "bold",
    backgroundColor: "#f5df4d",
    color: "#6f6106",
  },
});
