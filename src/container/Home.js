import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => alert('botão clicado'),
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => alert('botão clicado'),
    }

    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('botão clicado'),
    }

    render() {
        return (
            <div className="container text-center">
                <br />
                <div className="row">
                    <HomeCard {...this.homeCardReleases} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        );
    }
}