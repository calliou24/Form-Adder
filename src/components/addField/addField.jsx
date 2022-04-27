import React, { useEffect, useState } from 'react';
import styles from './add-field.module.css';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

function AddField({ handdleAdd }) {
	const [ modal, setModal ] = useState(false);
	const [ modalSelect, setModalSelect ] = useState(false);
	const [ options, setOptions ] = useState([]);
	const [ info, setInfo ] = useState();
	const [ component, setComponent ] = useState({});

	useEffect(
		() => {
			return modal ? document.body.classList.add('modalOpen') : document.body.removeAttribute('class');
		},
		[ modal ]
	);

	const handdleAddField = (component, type) => {
		setModal(true);
		setComponent({ component: component, type: type });
	};
	const addItem = () => {
		setOptions([ ...options, info ]);
	};

	const handdleAddSelect = (component, type) => {
		setModalSelect(true);
		setComponent({ component: component, type: type });
	};
	const handdleAddSelectSubmit = (e) => {
		e.preventDefaul;
		handdleAdd({
			type: component.type,
			label: info,
			component: component.component,
			id: new Date(),
			options: options
		});
		setModalSelect(false);
	};
	const handdleModal = (e) => {
		e.preventDefaul;
		handdleAdd({ type: component.type, label: info, component: component.component, id: new Date() });
		setModal(false);
	};

	return (
		<div>
			<div onClick={() => handdleAddField('text', 'text')} className={styles.addfield}>
				Input <AddIcon />
			</div>
			<div onClick={() => handdleAddField('textarea', 'text')} className={styles.addfield}>
				Text <AddIcon />
			</div>
			<div onClick={() => handdleAddSelect('select', 'select')} className={styles.addfield}>
				Select <AddIcon />
			</div>
			<div onClick={() => handdleAddField('radio', 'radio')} className={styles.addfield}>
				Radio <AddIcon />
			</div>
			{modal && (
				<div className={styles.lightBox}>
					<form onSubmit={handdleModal} className={styles.modal}>
						<label className={styles.labelField}>Field Name</label>
						<input className={styles.input} onChange={(e) => setInfo(e.target.value)} />
						<button type="submit" className={styles.button}>
							Add
						</button>
					</form>
					<div className={styles.closeModal} onClick={() => setModal(false)}>
						<CloseIcon />
					</div>
				</div>
			)}
			{modalSelect && (
				<div className={styles.lightBox}>
					<form onSubmit={handdleAddSelectSubmit} className={styles.modal}>
						<label className={styles.labelField}>Add options</label>
						<div className={styles.inputCont}>
							<input className={styles.input} onChange={(e) => setInfo(e.target.value)} />
							<div onClick={addItem} className={styles.buttonAdd}>
								Add
							</div>
						</div>
						<button type="submit" className={styles.button}>
							Submit
						</button>
					</form>
					<div className={styles.options}>
						<p>Options</p>
						<ul className={styles.list}>
							{options.map((e) => <li key={`${e}${new Date()}`} >{e}</li>)}
						</ul>
					</div>
					<div className={styles.closeModal} onClick={() => setModal(false)}>
						<CloseIcon />
					</div>
				</div>
			)}
		</div>
	);
}

export default AddField;
