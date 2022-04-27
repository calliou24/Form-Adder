import styles from './form.module.css';

function Form({ data }) {
	return (
		<form className={styles.form}>
			{data.map((e) => {
				const { type, label, component, id, options } = e;
				return (
					<div key={id} className={styles.fieldCont}>
						{type === 'text' && <label className={styles.componentLabel}>{label}</label>}
						{component === 'text' ? (
							<input className={styles.input} />
						) : component === 'textarea' ? (
							<textarea className={styles.input} />
						) : component === 'radio' ? (
							<div>
								{' '}
								<input type="radio" value={label} name={label} />
								{label}
							</div>
						) : (
							<select>
                {options.map(e => <option>{e}</option>)}
              </select>
						)}
					</div>
				);
			})}
		</form>
	);
}

export default Form;
