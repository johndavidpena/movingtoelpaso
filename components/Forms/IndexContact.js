import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import axios from 'axios/index';
import * as gtag from '../../utils/gtag';
// import UserInterest from '../Forms/UserInterest';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.note.length > 150) {
    errors.note = 'Must be 150 characters or less';
  }

  return errors;
};

const IndexContact = ({ showForm, setShowForm }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      note: ''
    },
    validate,
    onSubmit: async (values) => {
      const res = await axios.post('/api/Mcontacts', { values: values })
        .then(() => {
          setShowForm(false);
        })
        .then(() => {
          const twilioAlert = axios.post('/api/twilioAlert', { values: values });
        })
        .then(() => {
          gtag.event({
            action: 'submit_form',
            category: 'Contact',
            label: 'IndexContact',
            value: 'Submit'
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={FormStyles.indexForm}>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div><p>{formik.errors.firstName}</p></div>
      ) : null}
      <input
        className={FormStyles.indexInput}
        id="firstName"
        name="firstName"
        placeholder="First name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div><p>{formik.errors.lastName}</p></div>
      ) : null}
      <input
        className={FormStyles.indexInput}
        id="lastName"
        name="lastName"
        placeholder="Last name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.email && formik.errors.email ? (
        <div><p>{formik.errors.email}</p></div>
      ) : null}
      <input
        className={FormStyles.indexInput}
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <input
        className={FormStyles.indexInput}
        id="phone"
        name="phone"
        placeholder="Phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      {formik.errors.note ? (
        <div><p>{formik.errors.note}</p></div>
      ) : null}
      <textarea
        className={FormStyles.indexInput}
        id="note"
        name="note"
        placeholder="Message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.note}
      />

      {/* <UserInterest /> */}

      <button type="submit">Submit</button>
    </form>
  );
}

export default IndexContact;
