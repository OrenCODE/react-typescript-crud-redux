import React from 'react';
import { Tech } from '../../types/api.types';

export type Props = {
    tech: Tech
}

export default function TechItem({ tech }: Props) {
    return (
        <li className="collection-item">
            <div> {tech.firstName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
}