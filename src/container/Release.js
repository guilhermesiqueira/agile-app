import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

class Release extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 1',
                    releaseDate: '01/01/2019',
                    deleted: 0,
                },
                {
                    id: 2,
                    releaseName: 'Release 2',
                    releaseDate: '01/01/2019',
                    deleted: 0,
                },
                {
                    id: 3,
                    releaseName: 'Release 3',
                    releaseDate: '01/01/2019',
                    deleted: 0,
                },
                {
                    id: 4,
                    releaseName: 'Release 4',
                    releaseDate: '01/01/2019',
                    deleted: 0,
                }
            ]
        }
    }

    handleSubmit(e, {name, date}) {
        e.preventDefault();
        var state = this.state;
        var myRelease= {
            id: state.releases.length +1 ,
            releaseName: name,
            releaseDate: date,
            deleted: 0,
        }
        this.setState({releases: state.releases.concat(myRelease)});
    }

    removeRelease(id) {
        alert(id);
    }
    
    render() {
        return (
            <div className="text-center" style={{marginTop: '25px'}}>
                <ReleaseForm submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            if(release.deleted === 0 ) {
                                return (
                                    <tr>
                                        <th scope="row">{release.id}</th>
                                        <td>{release.releaseName}</td>
                                        <td>{release.releaseDate}</td>
                                        <td><button type="button" onClick={() => this.removeRelease(release.id)} className="btn btn-danger btn-sm">REMOVER</button></td>
                                    </tr>
                                );
                            }
                            else {
                                return (
                                    <h1>error</h1>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Release;