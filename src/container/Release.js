import React, { Component } from 'react';

class Release extends Component {

    constructor() {
        super();
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 1',
                    releaseDate: '01/01/2019',
                },
                {
                    id: 2,
                    releaseName: 'Release 2',
                    releaseDate: '01/01/2019',
                },
                {
                    id: 3,
                    releaseName: 'Release 3',
                    releaseDate: '01/01/2019',
                },
                {
                    id: 4,
                    releaseName: 'Release 4',
                    releaseDate: '01/01/2019',
                }
            ]
        }
    }

    render() {
        return (
            <div className="text-center" style={{marginTop: '25px'}}>
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
                            return (
                                <tr>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" className="btn btn-outline-danger btn-sm">REMOVER</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Release;