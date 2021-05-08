import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';
import { AppState } from '../../redux/reducers';

export default function TechSelectOptions(): JSX.Element {

    const { techs, loading } = useSelector((state: AppState) => state.tech);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTechs());
    }, [dispatch])

    return <>{
        !loading && techs !== [] && techs.map((tech) =>
            <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
                {tech.firstName} {tech.lastName}
            </option>)
    }</>;
}