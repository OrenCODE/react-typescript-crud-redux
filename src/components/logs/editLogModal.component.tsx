import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import { Log } from '../../types/api.types';
import { useDispatch, useSelector } from 'react-redux';
import { updateLog } from '../../redux/actions/logActions';
import { AppState } from '../../redux/reducers';
import TechSelectOptions from '../techs/techSelectOptions.component';

export default function EditLogModal() {

    const { current } = useSelector((state: AppState) => state.log);
    const dispatch = useDispatch();

    useEffect(() => {
        if (current) {
            setMessege(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, [current])

    const [message, setMessege] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (message === '' || tech === '') {
            M.toast({ html: 'Please Enter a message and tech' });
        } else {
            const editedLog: Log = {
                id: current?.id,
                message,
                tech,
                attention,
                date: new Date()
            }

            dispatch(updateLog(editedLog));
            M.toast({ html: `Log updated by ${tech}` })

            setMessege('');
            setTech('');
            setAttention(false)
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={styles.modal}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessege(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention as any}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">
                        Enter
                    </a>
                </div>

            </div>
        </div>
    );
}


const styles = {
    modal: {
        width: '75%',
        height: '75%'
    }
}