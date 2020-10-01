import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';
import {
    Checkbox
} from '@patternfly/react-core';

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Product', cellTransforms: [headerCol()] },
        { title: 'Action' },
      ],
      rows: [
        {
          cells: ['Rifil','aaa']
        },
        {
          cells: ['Product2','bbb']
        },
      ],
      canSelectAll: true
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      rows[rowId].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
  }

  render() {
    const { columns, rows, canSelectAll } = this.state;

    return (
      <div>
        <Checkbox
          label="Can select all"
          className="pf-u-mb-lg"
          isChecked={canSelectAll}
          onChange={this.toggleSelect}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
          />
        <Table
          onSelect={this.onSelect}
          canSelectAll={canSelectAll}
          aria-label="Selectable Table"
          cells={columns}
          rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}


export default DataTable;