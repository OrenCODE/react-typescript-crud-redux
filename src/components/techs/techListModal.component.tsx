import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';
import { AppState } from '../../redux/reducers';
import TechItem from './techItem.component';

export default function TechListModal() {

    const { techs, loading } = useSelector((state: AppState) => state.tech);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTechs());
    }, [])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs !== [] && techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
                </ul>
            </div>
        </div>
    );
}