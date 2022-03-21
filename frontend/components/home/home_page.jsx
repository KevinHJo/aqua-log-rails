import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      user: this.props.currentUser.id,
      modal: false
    }

    this.sendToTank = this.sendToTank.bind(this);
    this.toggleCreateTank = this.toggleCreateTank.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.fetchUserTanks(this.props.currentUser.id)
  }

  sendToTank(tankId) {
    this.props.history.push(`/tanks/${tankId}`);
  }

  toggleCreateTank(e) {
    this.setState({modal: !this.state.modal});
  }

  ensureOpenModal(e) {
    e.stopPropagation();
  }

  updateName(e) {
    this.setState({name: e.currentTarget.value})
  }

  handleSubmit() {
    this.props.createTank(this.state)
    this.setState({
      name: '',
      modal: false
    })
  }

  renderCreateTankForm() {
    if (this.state.modal) {
      return (
        <div id='create-tank-form-container' onClick={this.toggleCreateTank}>
          <form id='create-tank-form' onSubmit={this.handleSubmit} onClick={this.ensureOpenModal}>
            <h2>Make a Tank!</h2>
            <div id='create-tank-name'>
              <label htmlFor='name'>Name: </label>
              <input type="text"
                name='name'
                value={this.state.name}
                onChange={this.updateName.bind(this)}
                placeholder='Input Tank Name Here'
              />
            </div>

            <input id='create-tank-submit' type="submit" value='Create New Tank'/>
          </form>
        </div>
        
      )
    } else {
      return null
    }
  }
  
  render() {
    return (
      <div id='home-page'>
        <h1 id='home-page-header'>Welcome {this.props.currentUser.username}!</h1>
        
        {this.renderCreateTankForm()}

        <ul className='home-tank-list'>
          <h2>Your Tanks:</h2>
          {this.props.userTanks.map( tank => {
            return <li key={`tank-${tank._id}`} className='home-tank-list-item' onClick={() => this.sendToTank(tank.id)}>{tank.name}</li>
          })}
        </ul>
        <button onClick={this.toggleCreateTank}>Add a Tank</button>
      </div>
    );
  }
}

export default HomePage