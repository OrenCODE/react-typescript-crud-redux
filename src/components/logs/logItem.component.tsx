import React from 'react';
import { Log } from '../../types/api.types';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../redux/actions/logActions';
import M from 'materialize-css';

export type Props = {
    log: Log;
}

export default function LogItem({ log }: Props) {

    const dispatch = useDispatch();

    const onDelete = (id: number) => {
        dispatch(deleteLog(id));
        M.toast({ html: 'Log Deleted' });
    }

    const setCurrent = (log: Log) => {
        dispatch(setCurrentLog(log));
    }

    return (
        <li className="collection-item">
            <div>
                <a
                    href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)}>
                    {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span>
                    {'  '} last updated by {' '}
                    <span className="blact-text">{log.tech}</span>
                    on <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {log.date}
                    </Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={() => onDelete(log.id as number)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
}