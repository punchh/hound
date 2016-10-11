class OrganizationsList extends React.Component {
  reposForOrg = (org) => {
    return _.filter(this.props.repos, (repo) => {
      return repo.owner.id === org.id;
    });
  }

  render = () => {

    return (
      <ul className="organizations">
        {this.props.organizations.map( (org) => (
          <Organization
            data={org}
            key={org.id}
            repos={(this.props.repos && this.reposForOrg(org)) || null}
            onRepoClicked={this.props.onRepoClicked}
            filterTerm={this.props.filterTerm}
            isProcessingId={this.props.isProcessingId}
          />
        ))}
      </ul>
    );
  }
}
