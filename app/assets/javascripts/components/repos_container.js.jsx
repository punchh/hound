class ReposContainer extends React.Component {
  state = {
    isSyncing: false,
    includesPrivate: true,
    filterTerm: null,
    processing: false
  };

  activateRepo = id => {
    return fetch(`repos/${id}/activation`, {method: "post"});
  }

  onRepoClicked = id => {
    this.setState({processing: true});

    this.activateRepo(id).then(
      (resp) => {
        if (resp.ok) {
          console.log(resp);
        } else {
          console.log("error");
          console.log(resp);
        }
      }
    ).then(
      () => {
        this.setState({processing: false});
      }
    )
  }

  onRefreshClicked = evt => {
    this.setState({isSyncing: true});
    setTimeout( () => {
      this.setState({isSyncing: false});
    }, 5000);
  }

  onSearchInput = term => {
    this.setState({filterTerm: term});
  }

  render() {
    return (
      <div>
        <RepoTools
          showPrivateButton={!this.state.includesPrivate}
          onSearchInput={this.onSearchInput}
          onRefreshClicked={this.onRefreshClicked}
          isSyncing={this.state.isSyncing}
        />
        {
          this.state.isSyncing
          ? <ReposSyncSpinner/>
          : null
        }
        <OrganizationsList
          filterTerm={this.state.filterTerm}
          onRepoClicked={this.onRepoClicked}
          processing={this.state.processing}
        />
      </div>
    );
  }
}
