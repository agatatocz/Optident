import React, { useState } from "react";
import { connect } from "react-redux";
import { TableRow, TableCell, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { setEditing } from "./../../../store/actions/priceList";
import DescriptionIcon from "./DescriptionIcon";
import CountCell from "./CountCell";
import DeleteButton from "./DeleteButton";
import { useStyles } from "../styles";

const PositionRow = ({ position, editable = false, ...props }) => {
  const classes = useStyles();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <div className={classes.positionCell}>
            {editable && (
              <>
                <IconButton
                  onClick={() => props.setEditing(position, true)}
                  size="small"
                >
                  <EditIcon className={classes.editIcon} />
                </IconButton>
                <DeleteButton position={position} />
              </>
            )}
            <DescriptionIcon
              showDescription={showDescription}
              setShowDescription={setShowDescription}
            />
            <Typography>{position.name}</Typography>
          </div>
        </TableCell>
        <TableCell className={classes.bodyCell}>
          <Typography>{position.price} PLN</Typography>
        </TableCell>
        <CountCell position={position} />
      </TableRow>
      {showDescription && (
        <TableRow>
          <TableCell colSpan={3}>
            <Typography>{position.description}</Typography>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default connect(
  null,
  { setEditing }
)(PositionRow);
