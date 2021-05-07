import React, { useState, useEffect } from 'react';
import { Log } from '../../types/api.types';
import Preloader from '../layout/preloader.component';
import LogItem from './logItem.component';

export type Props = {

}

export default function Logs(props: Props) {

    const [logs, setLogs] = useState<Log[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, [])

    const getLogs = async () => {
        setLoading(true);

        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if (loading) {
        return <Preloader/>
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