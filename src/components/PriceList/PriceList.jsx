import React, { useState } from "react";
import { connect } from "react-redux";
import { Paper, Table, TableBody } from "@material-ui/core";
import PositionRow from "./PositionRow/";
import TableHead from "./TableHead";
import SumRow from "./SumRow";
import EditablePositionRow from "./PositionRow/EditablePositionRow";
import AddPositionRow from "./AddPositionRow";
import AddPositionButton from "./AddPositionButton";
import CreateReceiptButton from "./CreateReceiptButton";
import { useStyles } from "./styles";

const PriceList = ({ positions, sum, loggedIn, ...props }) => {
  const classes = useStyles();
  const [showAddPositionRow, setShowAddPositionRow] = useState(false);

  return (
    <Paper>
      <Table>
        <TableHead />
        <TableBody>
          {positions.map(position =>
            position.editing ? (
              <EditablePositionRow position={position} key={position.id} />
            ) : (
              <PositionRow
                position={position}
                key={position.id}
                editable={loggedIn}
              ></PositionRow>
            )
          )}
          <SumRow sum={sum} />
          {showAddPositionRow && (
            <AddPositionRow
              hideAddPositionRow={() => setShowAddPositionRow(false)}
            ></AddPositionRow>
          )}
        </TableBody>
      </Table>
      {loggedIn && (
        <div className={classes.buttonsContainer}>
          <AddPositionButton
            showAddPositionRow={showAddPositionRow}
            setShowAddPositionRow={setShowAddPositionRow}
          />
          <CreateReceiptButton />
        </div>
      )}
    </Paper>
  );
};

const mapStateToProps = state => ({
  positions: state.priceList.positions,
  sum: state.priceList.sum,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(PriceList);
