import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTech } from '../../redux/actions/techActions';
import { Tech } from '../../types/api.types';

export type Props = {
    tech: Tech
}

export default function TechItem({ tech }: Props) {

    const dispatch = useDispatch();

    const onDelete = (id: number) => {
        dispatch(deleteTech(id));
        M.toast({html: 'Technician deleted'});
    }

    return (
        <li className="collection-item">
            <div> {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content" onClick={() => onDelete(tech.id as number)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
}