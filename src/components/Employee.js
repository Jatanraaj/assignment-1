import React, { Component } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';

export default class Employee extends Component {
  state = {
    newsData: [],
    loading: true
  }

  async componentDidMount() {
    await axios.get('http://localhost:3000/service', {
      params: {
        skip: 10,
        limit:10
      }
    })
      .then(res => {
        const newsData = res.data.users;
        this.setState({ newsData, loading: false });
      });
  }
  
  

  render() {
    return (
      <div className="container tableemp">
        <div className="table-responsive">
          {this.state.loading ? (
            <div className="spinner">
              <PacmanLoader color={'#007bff'} loading={this.state.loading} css={spinnerStyle} size={25} />
            </div>
          ) : (
            <table className="table table-striped table-bordered table-hover">
              <thead className="thead-dark">
                  <tr>
                      <th colSpan={11}><h1>Employee Table</h1></th>
                  </tr>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Username</th>
                  <th>Birth Date</th>
                  <th>Profile Pic</th>
                </tr>
              </thead>
              <tbody>
                {this.state.newsData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.age}</td>
                    <td>{data.weight}</td>
                    <td>{data.height}</td>
                    <td>{data.username}</td>
                    <td>{data.birthDate}</td>
                    <td><img src={data.image}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

const spinnerStyle = css`
  display: block;
  margin: 0 auto;
`;
