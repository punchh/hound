var OrganizationsList = React.createClass({
  getInitialState: function() {
    return {
      organizations: [
        {id: 1, name: "New-Bamboo"}
      ]
    };
  },

  render: function() {
    return (
      <ul className="organizations">
        {this.state.organizations.map( (org) => (
          <Organization
            data={org}
            key={org.id}
            onRepoClicked={this.props.onRepoClicked}
            filterTerm={this.props.filterTerm}
          />
        ))}
      </ul>
    );
  }
});
