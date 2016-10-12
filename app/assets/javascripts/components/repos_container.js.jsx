class ReposContainer extends React.Component {
  fetchReposAndOrgs = () => {
    this.setState({isSyncing: true});
    fetch("repos.json", {
      credentials: "same-origin",
      headers: {
        "X-XSRF-Token": this.props.authenticity_token
      }
    })
    .then( (response) => {
      if (response.ok) {
        response.json().then( (data) => {
          this.setState({repos: data});

          organizations = data.map( (repo) => { return repo.owner; });
          this.setState({organizations: _.uniqWith(organizations, _.isEqual)});

          this.setState({isSyncing: false});
        });
      } else {
        //
      }
    })
    .catch( (error) => {
      //
    });
  }

  syncReposAndOrgs = () => {
    return fetch("repo_syncs.json", {
      credentials: "same-origin",
      method: "post",
      headers: {
        "X-XSRF-Token": this.props.authenticity_token
      }
    });
  }

  state = {
    isSyncing: false,
    isProcessingId: null,
    filterTerm: null,
    repos: [],
    organizations: []
  }

  componentWillMount = () => {
    this.fetchReposAndOrgs();
  }

  activateRepo = (id) => {
    return fetch(`repos/${id}/activation.json`, {
        credentials: "same-origin",
        method: "post",
        headers: {
          "X-XSRF-Token": this.props.authenticity_token
        }
      }
    );
  }

  onRepoClicked = (id) => {
    this.setState({isProcessingId: id});

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
        this.setState({isProcessingId: null});
      }
    )
  }

  getUserSyncingStatus = () => {
    fetch("/user.json", {
      credentials: "same-origin",
      headers: {
        "X-XSRF-Token": this.props.authenticity_token
      }
    });
  }

  waitForUserSyncDone = () => {

  }

  onRefreshClicked = (evt) => {
    this.setState({isSyncing: true});
    this.syncReposAndOrgs().then( (resp) => {
      if (resp.ok) {
        console.log("sync start OK!");
        waitForUserSyncDone();
      } else {
        console.log("sync start NOK!");
        console.log(resp);
      }
    });
  }

  onPrivateClicked = (evt) => {
    fetch("/auth/github?access=full", {method: "post"})
  }

  onSearchInput = (term) => {
    this.setState({filterTerm: term});
  }

  render = () => {
    return (
      const { has_private_access } = this.props;

      <div>
        <RepoTools
          showPrivateButton={!has_private_access}
          onSearchInput={this.onSearchInput}
          onRefreshClicked={this.onRefreshClicked}
          onPrivateClicked={this.onPrivateClicked}
          isSyncing={this.state.isSyncing}
        />
        {
          this.state.isSyncing
          ? <ReposSyncSpinner/>
          : null
        }
        <OrganizationsList
          organizations={this.state.organizations}
          repos={this.state.repos}
          filterTerm={this.state.filterTerm}
          onRepoClicked={this.onRepoClicked}
          isProcessingId={this.state.isProcessingId}
        />
      </div>
    );
  }
}
