class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return (
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        <td style={style}>{this.props.children}</td>
      </tr>
    );
  }
}
class IssueFilter extends React.Component {
  render() {
    return (
      <div>Placeholder for filter</div>
    );
  }
}
class IssueTable extends React.Component {
  render() {
    const rowStyle = {border: '1px solid silver', padding: 4}; 
    return (
      <table style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <IssueRow rowStyle={rowStyle} issue_id={1}>
            'First issue'
          </IssueRow>
          <IssueRow rowStyle={rowStyle} issue_id={2}>
            'Second issue'
          </IssueRow>
        </tbody>
      </table>
    );
  }
}
class AddIsuue extends React.Component {
  render() {
    return (
      <div>Placeholder for add form</div>
    );
  }
}
class IsuueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter/>
        <IssueTable/>
        <AddIsuue/>
      </React.Fragment>
    );
  }
}

const element = <IsuueList/>

ReactDOM.render(element, document.querySelector('#root'));