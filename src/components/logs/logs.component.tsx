import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogs } from '../../redux/actions/logActions';
import { AppState } from '../../redux/reducers';
import Preloader from '../layout/preloader.component';
import LogItem from './logItem.component';

export default function Logs() {

    const { logs, loading } = useSelector((state: AppState) => state.log);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLogs());
    }, [dispatch])

    if (loading || logs === null) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ?
                <p className="center">No logs to show...</p> :
                logs.map(log => <LogItem key={log.id} log={log} />)
            }
        </ul>
    );
}