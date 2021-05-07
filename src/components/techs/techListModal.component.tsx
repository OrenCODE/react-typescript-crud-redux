import React, { useState, useEffect } from 'react';
import { Tech } from '../../types/api.types';
import TechItem from './techItem.component';

export type Props = {

}

export default function TechListModal(props: Props) {

    const [techs, setTechs] = useState<Tech[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    }, [])

    const getTechs = async () => {
        setLoading(true);

        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => <TechItem key={tech.id} tech={tech}/>)}
                </ul>
            </div>
        </div>
    );
}