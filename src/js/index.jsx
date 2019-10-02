const initialIssues = [
  {
    id: 1, status: 'New', owner: 'Oleh', effort: 7,
    created: new Date('2018-08-15'), due: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
    created: new Date('2018-08-16'), due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
  }
];

class IssueFilter extends React.Component {
  render() {
    return (
      <div>Placeholder for filter</div>
    );
  }
}
class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : ''}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}
class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => <IssueRow issue={issue} key={issue.id}/>);
    return (
      <table className='bordered-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    );
  }
}
class AddIssue extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.addForm;
    this.props.addIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New'
    });
    form.reset();
  }
  render() {
    return (
      <form name="addForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="owner" placeholder="owner"/>
        <input type="text" name="title" placeholder="title"/>
        <input type="submit"/>
      </form>
    );
  }
}
class IssueList extends React.Component {
  constructor() {
    super();
    this.state = {issues: []};
  }
  addIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    let newList = this.state.issues.slice();
    newList.push(issue)
    this.setState({
      issues: newList
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        issues: initialIssues
      })
    }, 1000);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter/>
        <IssueTable issues={this.state.issues}/>
        <AddIssue addIssue={this.addIssue.bind(this)}/>
      </React.Fragment>
    );
  }
}

const element = <IssueList/>

ReactDOM.render(element, document.querySelector('#root'));
